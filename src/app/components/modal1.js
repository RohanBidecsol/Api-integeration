"use client";
import React, { useState } from "react";
import { Button, Modal, notification } from "antd";

const Modalform = () => {
  // Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ant Design notification
  const [api, contextHolder] = notification.useNotification();

  // Modal kholne ka function
  const showModal = () => {
    setIsModalOpen(true);
  };

  // OK button click par jo action chalega
  const handleOk = () => {
    api.success({
      message: "Added to Cart",
      description: "Product has been added to your cart successfully!",
    });
    setIsModalOpen(false);
  };

  // Cancel button click par
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Notification ke liye zaroori */}
      {contextHolder}

      {/* Modal kholne wala button */}
      <Button type="primary" onClick={showModal}>
        Add to Cart
      </Button>

      {/* Modal itself */}
      <Modal
        title="Buy Confirmation"
        open={isModalOpen}
        onOk={handleOk}       // ✅ OK button pe success notification
        onCancel={handleCancel}
      >
        Are you sure you want to add this product to your cart?
      </Modal>
    </>
  );
};

export default Modalform;
