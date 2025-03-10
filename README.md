# 📹 Video Calling App (WebRTC + Socket.IO)

🚀 A real-time **video calling application** built using **WebRTC, Node.js, Express, and Socket.IO**.  
This project enables **peer-to-peer video calls** with a user-friendly interface, similar to apps like **Omegle**.

---

## **🔹 Features**
👉 **User Registration** – Users can enter a name and join the call list.  
👉 **Real-Time Video Calls** – Peer-to-peer communication using **WebRTC**.  
👉 **WebSocket Signaling** – Handles user connections with **Socket.IO**.  
👉 **ICE Candidate Exchange** – Ensures smooth communication.  
👉 **Call Handling** – Users can start and end video calls easily.  

---

## **🛠 Tech Stack**
🔹 **Frontend** – HTML, CSS, JavaScript  
🔹 **Backend** – Node.js, Express.js  
🔹 **Real-Time Communication** – WebRTC, Socket.IO  
🔹 **Signaling Server** – WebSockets for peer connection  
🔹 **STUN Server** – Google STUN for NAT traversal  

---

## **📂 Folder Structure**
```
video-calling-app/
│── public/
│   ├── js/
│   │   ├── socket.io.js  (WebSocket client)
│   │   ├── main.js        (Frontend logic)
│   ├── css/
│   │   ├── style.css      (Styling)
│   ├── images/           (Icons, screenshots, diagrams)
│── app/
│   ├── index.html        (Main UI)
│── server.js             (Backend server)
│── package.json          (Project dependencies)
│── README.md             (Project documentation)
```

---

## **🚀 Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Jijojacob988/Video-Chat---WebRTC.git
cd Video-Chat---WebRTC
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Server**
```sh
node server.js
```
🔹 The server runs on **`http://localhost:9000`**  

---

## **📌 Usage Guide**
1️⃣ Open **`http://localhost:9000`** in two different browser tabs or devices.  
2️⃣ Enter a username and click **"Create User"** to join the call list.  
3️⃣ Click on another user to **start a video call**.  
4️⃣ End the call using the **disconnect button**.  

---

## **🖼️ Screenshots & Architecture Diagram**
### 🔹 App UI  
![App UI](https://raw.githubusercontent.com/Jijojacob988/Video-Chat---WebRTC/main/public/images/ui-screenshot.png)  

### 🔹 Video Call Flow (Architecture)  
![Video Call Architecture](https://raw.githubusercontent.com/Jijojacob988/Video-Chat---WebRTC/main/public/images/architecture-diagram.png)  
*This diagram explains how users connect through WebRTC and Socket.IO.*

---

## **🤝 Contributing**
Want to improve this project? Feel free to submit a **Pull Request** or open an **Issue**!  

---

### **⭐ If you like this project, don't forget to give it a star on GitHub!** ⭐

