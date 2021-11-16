import React, { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { AppContext } from '../../context/AppProvider';
import { Avatar, Tooltip, Button, Modal, Input } from 'antd';

import './header.scss';

export default function Header() {

  const { user } = React.useContext(AuthContext);
  const { selectWorkspace, memberList } = React.useContext(AppContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div className="header">
      <div className="header-left">
        <h1>{selectWorkspace.name}</h1>
      </div>
      <div className="header-center">
        <Avatar.Group maxCount={2} size="large" maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            {memberList.map((member) => {
              return (
              <Tooltip key={member.uid} title={member.name} placement="top">
                <Avatar key={member.uid} src={member.avaURL} />
              </Tooltip>
              )
            })}

        </Avatar.Group>

        <Button type="dashed" onClick={showModal}>
          +  New Member
        </Button>

        <Modal title="Add New Member" visible={isModalVisible} width="400px" onOk={handleOk} onCancel={handleCancel}>
          <Input
            placeholder="@Username"
          />
        </Modal>
      </div>

      <div className="header-right">
      <Tooltip title={user.displayName} placement="top">
        <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginLeft: "10px" }} key={user.uid} src={user.photoURL}/>
      </Tooltip>
      </div>
    </div>
  )
}
