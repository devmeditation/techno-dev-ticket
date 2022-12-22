import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { LogoSVG } from "../LogoSVG";

import styles from "./editButton.module.css";

export function EditButton() {
  const [avatarUri, setAvatarUri] = useState(
    "https://cpad.ask.fm/727/682/076/-359996998-1t8oorq-e95som0jr33r3qk/original/avatar.jpg"
  );

  function handleCreteTicket() {
    console.log("ticket criado!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.editButtonTrigger}>
        <Image
          src="/icons/edit.svg"
          width={24}
          height={24}
          alt="Icone de edição de dados"
        />
        Insira dados manuais
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.editButtonOverlay} />
        <Dialog.Content className={styles.editButtonContent}>
          <div className="flex flex-1 justify-center">
            <LogoSVG />
          </div>
          <Dialog.Close className={styles.editButtonClose}>
            <Image
              src="/icons/close.svg"
              width={24}
              height={24}
              alt="Icone de edição de dados"
            />
          </Dialog.Close>

          <Dialog.Title className={styles.editButtonTitle}>
            Insira seus dados no campo abaixo para personalizar seu ticket
          </Dialog.Title>

          <form action="">
            <fieldset className={styles.editButtonFormGroup}>
              <input id="name" placeholder="Nome completo" />

              <input id="rolle" placeholder="Função na empresa" />
            </fieldset>

            <fieldset className="flex lg:justify-around">
              <div className="flex w-1/2">
                <img
                  src={avatarUri}
                  alt="negra linda"
                  className="w-32 h-32 rounded-full p-4 object-cover"
                />
              </div>

              <div className={styles.editButtonAvatarContainer}>
                <input
                  type="file"
                  hidden
                  id="avatar"
                  readOnly
                  autoComplete="off"
                  placeholder="Nenhuma imagem selecionada"
                />

                <label
                  // role="button"
                  // aria-controls="avatar"
                  // tabIndex={0}
                  htmlFor="avatar"
                >
                  carregar foto
                </label>

                <span>remover foto</span>
              </div>
            </fieldset>

            <button
              type="submit"
              className={styles.editButtonTicket}
              onClick={handleCreteTicket}
            >
              Gerar meu ticket
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
