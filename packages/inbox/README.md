# Inbox

**Inbox** is a lightweight package for Code.org App Lab that enables projects to send and retrieve messages using a GitHub-based backend. Since App Lab does not allow direct HTTP requests, this library leverages `image()` and `startWebRequest()` as a workaround. The backend is hosted on Render and stores messages in a GitHub repository.

---

## How It Works

Messages are sent by making a request to `applab-datanet.onrender.com`, tricking App Lab into executing it as an image load.  

Messages are stored in GitHub at:  
[`https://raw.githubusercontent.com/IMF777/applab-datanet/main/datasets/inbox/[projectID].json`](https://raw.githubusercontent.com/IMF777/applab-datanet/main/datasets/inbox/)

Messages can be retrieved via `startWebRequest()`, allowing projects to read previous messages.

---

## Functions

### `send(id, msg)`
Sends a message to the inbox associated with a given project ID.

**Parameters:**  
- `id` *(string)*: The unique project identifier.  
- `msg` *(string)*: The message to be sent.

**Example:**
```js
var projectID = "[ID of Applab project]";
send(projectID, "Hello, world!");
```

---

### `load(f)`
Loads all messages from the inbox of the current project and passes them to the given callback function.

**Parameters:**  
- `f` *(function)*: A function that takes an array of messages as its parameter.

**Note:** Every message in the array is an object with the format:
```json
{ "msg": "the-message", "timestamp": "when-it-was-sent" }
```

**Example:**
```js
load(function(messages) {
  console.log(messages); // Logs all messages in the inbox
});
```

---

### `loadLatest(f)`
Loads only the latest message from the inbox.

**Parameters:**  
- `f` *(function)*: A function that takes the latest message as its parameter.

**Example:**
```js
loadLatest(function(latestMessage) {
  console.log(latestMessage); // Logs the most recent message
});
```

---

## Workaround Explanation

Since App Lab does not allow standard HTTP requests, the library uses the `image()` function to indirectly send requests by loading an invisible image from `applab-datanet.onrender.com`. Additionally, `startWebRequest()` is used to fetch messages from GitHub, bypassing App Lab’s restrictions.

---

## Storage URL Example

Messages are stored as JSON files in the GitHub repository. This allows persistent, cloud-based messaging between Applab projects without requiring external databases.
