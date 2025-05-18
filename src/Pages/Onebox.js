// src/Pages/Onebox.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Onebox.css';

const sampleFolders = {
  Inbox: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    subject: `Inbox Mail ${i + 1}`,
    sender: `sender${i + 1}@inbox.com`,
    content: `This is the content of inbox mail ${i + 1}.`
  })),
  Sent: Array.from({ length: 6 }, (_, i) => ({
    id: i + 6,
    subject: `Sent Mail ${i + 1}`,
    sender: `you@yourmail.com`,
    content: `This is the content of sent mail ${i + 1}.`
  })),
  Spam: Array.from({ length: 5 }, (_, i) => ({
    id: i + 12,
    subject: `Spam Mail ${i + 1}`,
    sender: `spam${i + 1}@junk.com`,
    content: `Suspicious spam content ${i + 1}.`
  })),
  Trash: Array.from({ length: 5 }, (_, i) => ({
    id: i + 17,
    subject: `Trashed Mail ${i + 1}`,
    sender: `trash${i + 1}@deleted.com`,
    content: `Deleted mail content ${i + 1}.`
  }))
};

const Onebox = () => {
  const [selectedFolder, setSelectedFolder] = useState('Inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showFolders, setShowFolders] = useState(true);

  return (
    <div className="container-fluid onebox-bg text-light">
      <div className="row">

        {/* Folder Sidebar (Hamburger Toggle) */}
        {showFolders && (
          <div className="col-md-2 bg-dark border-end vh-100 p-3">
            <h5 className="mb-3">Folders</h5>
            <ul className="list-group">
              {Object.keys(sampleFolders).map(folder => (
                <li
                  key={folder}
                  className={`list-group-item list-group-item-dark text-dark ${folder === selectedFolder ? 'active-folder' : ''}`}
                  onClick={() => {
                    setSelectedFolder(folder);
                    setSelectedEmail(null);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {folder}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mail List */}
        <div className={showFolders ? "col-md-3 border-end p-3 vh-100 overflow-auto" : "col-md-4 offset-md-1 p-3 vh-100 border-end overflow-auto"}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">{selectedFolder}</h5>
            <button className="btn btn-sm btn-outline-light" onClick={() => setShowFolders(!showFolders)}>☰</button>
          </div>
          <ul className="list-group">
            {sampleFolders[selectedFolder].map(email => (
              <li
                key={email.id}
                className="list-group-item list-group-item-secondary mb-2"
                onClick={() => setSelectedEmail(email)}
                style={{ cursor: 'pointer' }}
              >
                <strong>{email.subject}</strong>
                <br />
                <small>{email.sender}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* Mail Content */}
        <div className="col p-4 vh-100 overflow-auto">
          {selectedEmail ? (
            <div>
              <h3>{selectedEmail.subject}</h3>
              <p><strong>From:</strong> {selectedEmail.sender}</p>
              <hr className="bg-light" />
              <p>{selectedEmail.content}</p>
            </div>
          ) : (
            <div className="">Select an email to view its details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onebox;
