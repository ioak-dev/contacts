"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import { Contact } from "@/types/Contact";
import EditPageController from "../EditPageController";
import { getContacts } from "./service";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, ThemeType } from "basicui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props { }

const MainPage = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts().then((response) => {
      setContacts(response);
    });
  }, []);

  const handleClick = (contact: Contact) => {
    router.push(`/edit?id=${contact._id}`);
  };

  const createContact = () => {
    router.push(`/edit`);
  };

  return (
    <div className="main-page-controller page-container">
      <div className="main-page-controller__action">
        <Button theme={ThemeType.primary} onClick={createContact}>
          <FontAwesomeIcon icon={faPlus} />
          Contact
        </Button>
      </div>
      <table className="basicui-table table-rounded table-hover">
        <thead>
          <th>Name</th>
          <th>Organization</th>
          <th>Email</th>
          <th>Telephone</th>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr key={item._id} onClick={() => handleClick(item)}>
              <td>{`${item.givenName} ${item.familyName}`}</td>
              <td>{item.organization}</td>
              <td>{item.email}</td>
              <td>{item.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
