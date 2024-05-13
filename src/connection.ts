import { Client } from 'contensis-delivery-api'

const ContensisClient = Client.create({
    rootUrl: "<cms-url>",
    accessToken: "<access-token>",
    projectId: "<project-id>",
    versionStatus: 'latest',
});

export default ContensisClient;