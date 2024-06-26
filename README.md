# EnterpriseLLM

Welcome to EnterpriseLLM, a high-performance chatbot designed for deployment in large-scale environments. This chatbot is not only optimized for scalability and efficiency but also ensures privacy compliance, giving you full control over your data. It's currently configured to integrate with the Azure Cloud suite, including Cosmos DB, a NoSQL database, and Azure ML Online REST endpoints, but can of course be implemented with other databases and REST endpoints for model hosting. This adaptable setup enables easy scalability and efficient management of a wide range of models, such as Mistral AI, Llama2, and more, making EnterpriseLLM an ideal solution for robust, secure, and dynamic chatbot applications. 

## Demo
https://github.com/AlexMaggioni/Local-Llama2/assets/98940667/65072c23-99b7-4d21-b11c-a68901dcce98

## Quickstart
EnterpriseLLM is ready to integrate with COSMOS DB and AZURE ML ONLINE ENDPOINTS. To start, update the `.env` file with your keys and access tokens.
To get EnterpriseLLM up and running, you'll need Node.js and npm installed on your system. Once you have these prerequisites, follow these simple steps:

**Install Node.js Dependencies:**
```sh
npm install
```
**Run the application:**
```sh
npm run dev
```
Tadam! You can now test it out!

**Object Structure for Database Objects:**

Below is the JSON structure used to represent user chat data in the database. Note that some fields, like timestamps, are dynamically generated according to the logic implemented in the code. The database also automatically creates certain system fields (e.g., `_rid`, `_etag`, etc.) that do not require manual intervention.

```json
{
    "id": "your_username@enterprise.com",
    "chats": [
        {
            "title": "",
            "created": "[Timestamp logic implemented in code]",
            "messages": [
                {
                    "content": "User input chat 1 ...",
                    "timestamp": "[Timestamp logic implemented in code]",
                    "isUser": true
                },
                {
                    "content": "Model response",
                    "timestamp": "[Timestamp logic implemented in code]",
                    "isUser": false
                }
            ]
        },
        {
            "title": "Write me an email",
            "created": "2023-09-10T20:16:00.596Z",
            "messages": [
                {
                    "content": "User input chat 2 ...",
                    "timestamp": "[Timestamp logic implemented in code]",
                    "isUser": true
                },
                {
                    "content": "Model response",
                    "timestamp": "[Timestamp logic implemented in code]",
                    "isUser": false
                }
            ]
        }
    ]
    // No intervention needed for the following fields (automatically created by the database)
    "_rid": null,
    "_self": null,
    "_etag": null,
    "_attachments": null,
    "_ts": null
}
```


## Preparing for Production Deployment

As you prepare EnterpriseLLM for a production environment, please consider the following essential modifications:

- **User Authentication Implementation:** In the current version of EnterpriseLLM, the user ID is hardcoded, as user authentication is not yet set up. For production deployment, it's crucial to implement a robust user authentication system. Once this is in place, you'll need to dynamically change the user ID in the application based on the authentication results, ensuring secure and personalized interactions with the NoSQL database.

- **Code Customization:** Feel free to customize the code of EnterpriseLLM to suit your current tech stack and operational needs. This adaptability allows you to tailor EnterpriseLLM to integrate seamlessly into your existing infrastructure and prepare it fully for production release.



