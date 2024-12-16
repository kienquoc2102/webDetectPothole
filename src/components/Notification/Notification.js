import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("newPothole", (data) => {
      setNotifications((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {`New pothole reported at ${notification.street} (Level: ${notification.level})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
