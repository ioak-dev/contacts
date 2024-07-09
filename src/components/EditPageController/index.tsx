"use client";

import {
  Button,
  ButtonVariantType,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Radio,
  Textarea,
  ThemeType,
} from "basicui";
import cloneDeep from "lodash/cloneDeep";
import "./style.css";
import { useEffect, useState } from "react";
import {
  faCheck,
  faChevronRight,
  faClose,
  faPen,
  faPenAlt,
  faPenClip,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from "@/types/Contact";
import { getContactById, saveContact, saveContactById } from "./service";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {}

const EditPageController = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<Contact>({
    email: "",
    givenName: "",
    familyName: "",
  });

  useEffect(() => {
    if (searchParams.has("id")) {
      getContactById(searchParams.get("id") || "").then((response) => {
        setState(response);
      });
    }
  }, [searchParams]);

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    if (state._id) {
      saveContactById(state._id, state, null).then((response: any) => {
        router.back();
      });
    } else {
      saveContact(state, null).then((response: any) => {
        router.back();
      });
    }
  };

  return (
    <div className="edit-page-controler page-container">
      <form className="contact-detail" onSubmit={handleSave}>
        <div className="contact-detail__form">
          <Input
            label="First name"
            autoFocus
            name="givenName"
            value={state.givenName}
            onInput={handleChange}
          />
          <Input
            label="Last name"
            name="familyName"
            value={state.familyName}
            onInput={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={state.email}
            onInput={handleChange}
          />
          <Input
            label="Telephone"
            name="telephone"
            value={state.telephone}
            onInput={handleChange}
          />
          <Input
            label="Topic of interest"
            name="topic"
            value={state.topic}
            onInput={handleChange}
          />
          <Textarea
            label="Additional comments"
            name="comments"
            value={state.comments}
            onInput={handleChange}
          />
        </div>
        <div className="contact-detail__action action-footer position-right">
          <Button theme={ThemeType.primary} type="submit">
            <FontAwesomeIcon icon={faChevronRight} />
            Save and go back
          </Button>
          <Button onClick={() => router.back()}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPageController;
