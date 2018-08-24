#!/bin/bash

mix deps.get

# Wait for Postgres to become available.
until PGPASSWORD=$POSTGRES_PASSWORD psql -h postgres -U "postgres" -c '\q' 2>/dev/null; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

echo "\nPostgres is available: continuing with database setup..."

# Potentially Set up the database
mix ecto.create
mix ecto.migrate

echo "\nTesting the installation..."
# "Proove" that install was successful by running the tests
mix test

echo "\n Launching Phoenix web server..."
iex -S mix phx.server