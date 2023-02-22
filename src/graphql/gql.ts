import { gql } from "@apollo/client";

export const getSession = gql`
  mutation getSession {
    introduceSession(input: { withAddress: true, domainId: "RG9tYWluOjE" }) {
      id
      addresses {
        address
      }
      expiresAt
    }
  }
`;

export const getEmails = gql`
  query getEmails($id: ID!) {
    session(id: $id) {
      mails {
        id
        receivedAt
        rawSize
        fromAddr
        headerSubject
        toAddr
        textSource
        text
        hasHtml
        html
      }
    }
  }
`;
