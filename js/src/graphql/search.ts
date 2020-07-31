import gql from "graphql-tag";

export const SEARCH_EVENTS = gql`
  query SearchEvents($location: String, $radius: Float, $tag: String, $term: String) {
    searchEvents(location: $location, radius: $radius, tag: $tag, term: $term) {
      total
      elements {
        title
        uuid
        beginsOn
        picture {
          url
        }
        tags {
          slug
          title
        }
        __typename
      }
    }
  }
`;

export const SEARCH_GROUPS = gql`
  query SearchGroups($searchText: String!) {
    searchGroups(search: $searchText) {
      total
      elements {
        avatar {
          url
        }
        domain
        preferredUsername
        name
        __typename
      }
    }
  }
`;

export const SEARCH_PERSONS = gql`
  query SearchPersons($searchText: String!, $page: Int, $limit: Int) {
    searchPersons(search: $searchText, page: $page, limit: $limit) {
      total
      elements {
        id
        avatar {
          url
        }
        domain
        preferredUsername
        name
        __typename
      }
    }
  }
`;
