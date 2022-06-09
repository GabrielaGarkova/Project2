import {useMutation, useQuery} from "react-query";
import {GraphQLClient, gql} from "graphql-request";
import {jsonToGraphQLQuery} from 'json-to-graphql-query';
import {Cookies} from "react-cookie";

const API_URL = 'http://localhost:4000/graphql';
const cookies = new Cookies();

const graphQLClient = new GraphQLClient(API_URL, {
    headers: () => {
        const token = cookies.get('token')
        const headers = {
            'Content-Type': 'application/json',
        }
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }
        return headers
    }
});

export function useGetHotel() {
    return useQuery("getHotel", async () => {
        return await graphQLClient.request(gql`
            query {
                hotel {
                    _id
                    name
                    city
                    type
                    star
                    image
                    reviews {
                        name
                        city
                        type
                        star
                        image
                    }
                }
            }
        `);
    });
}



