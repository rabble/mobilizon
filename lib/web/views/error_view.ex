defmodule Mobilizon.Web.ErrorView do
  @moduledoc """
  View for errors
  """
  use Mobilizon.Web, :view
  alias Mobilizon.Service.Metadata.Instance
  alias Mobilizon.Web.PageView

  def render("404.html", _assigns) do
    tags = Instance.build_tags()
    PageView.inject_tags(tags)
  end

  def render("404.json", _assigns) do
    %{msg: "Resource not found"}
  end

  def render("404.activity-json", _assigns) do
    %{msg: "Resource not found"}
  end

  def render("404.ics", _assigns) do
    "Bad feed"
  end

  def render("404.atom", _assigns) do
    "Bad feed"
  end

  def render("invalid_request.json", _assigns) do
    %{errors: "Invalid request"}
  end

  def render("not_found.json", %{details: details}) do
    %{
      msg: "Resource not found",
      details: details
    }
  end

  def render("500.html", _assigns) do
    "Internal server error"
  end

  # In case no render clause matches or no
  # template is found, let's render it as 500
  def template_not_found(template, assigns) do
    require Logger
    Logger.warn("Template #{inspect(template)} not found")
    render("500.html", assigns)
  end
end
