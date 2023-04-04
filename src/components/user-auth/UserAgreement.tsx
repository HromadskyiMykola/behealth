import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";

const userAgreement = (
  <DialogContent>
    
    <DialogContentText>Загальні положення</DialogContentText>
    <Divider />
    <DialogContentText>
      1.1. Ця угода є договором між вами, користувачем, і порталом "BeHealth"
      щодо використання його послуг.
    </DialogContentText>
    <DialogContentText>
      1.2. Використовуючи послуги порталу, ви погоджуєтеся з умовами цієї угоди.
    </DialogContentText>
    <DialogContentText>
      1.3. Портал має право в будь-який час змінювати умови цієї угоди без
      попереднього повідомлення користувача. Нові умови стають чинними з моменту
      їх опублікування на порталі.
    </DialogContentText>
    <br />
    <DialogContentText>Права та обов'язки сторін</DialogContentText>
    <Divider />
    <DialogContentText>2.1. Користувач має право:</DialogContentText>
    <DialogContentText>
      2.1.1. Використовувати послуги порталу згідно з умовами цієї угоди.
    </DialogContentText>
    <DialogContentText>
      2.1.2. Отримувати доступ до власних персональних даних та використовувати
      їх.
    </DialogContentText>
    <DialogContentText>
      2.1.3. Вимагати виправлення неточностей своїх персональних даних на
      порталі.
    </DialogContentText>
    <DialogContentText>
      2.1.4. Вимагати видалення своїх персональних даних з порталу.
    </DialogContentText>
    <br />
    <DialogContentText>2.2. Користувач зобов'язується:</DialogContentText>
    <DialogContentText>
      2.2.1. Не порушувати права та інтереси інших користувачів порталу.
    </DialogContentText>
    <DialogContentText>
      2.2.2. Не розповсюджувати образливу, недостовірну, або непристойну
      інформацію на порталі.
    </DialogContentText>
    <DialogContentText>
      2.2.3. Не використовувати послуги порталу для будь-яких незаконних дій або
      дій, що порушують цю угоду.
    </DialogContentText>
    <DialogContentText>
      2.2.4. Не намагатися отримати несанкціонований доступ до системи порталу.
    </DialogContentText>
    <br />
    <DialogContentText>2.3. Портал має право:</DialogContentText>
    <DialogContentText>
      2.3.1. Без попереднього повідомлення припинити надання послуг
      користувачеві, який порушує умови цієї угоди.
    </DialogContentText>
    <DialogContentText>
      2.3.2. Змінювати умови цієї угоди в будь-який час без попереднього
      повідомлення користувача, але з обов'язковим оновленням тексту угоди на
      порталі.
    </DialogContentText>
    <DialogContentText>
      2.3.3. Блокувати доступ до порталу користувачам, які порушують умови цієї
      угоди або вчиняють будь-які інші дії, що завдають шкоди порталу.
    </DialogContentText>
    <DialogContentText>
      2.3.4. Надавати інформацію користувачеві про зміни умов цієї угоди.
    </DialogContentText>
    <DialogContentText>
      2.3.5. Збирати, обробляти та зберігати персональні дані користувача
      відповідно до законодавства України та політики конфіденційності порталу.
    </DialogContentText>
    <br />
    <DialogContentText>Відповідальність сторін</DialogContentText>
    <Divider />
    <DialogContentText>
      3.1. Користувач несе повну відповідальність за використання послуг порталу
      та будь-які дії, вчинені через його обліковий запис.
    </DialogContentText>
    <DialogContentText>
      3.2. Портал не несе відповідальності за будь-які збитки, що можуть
      виникнути у користувача внаслідок використання послуг порталу або через
      технічні неполадки на стороні користувача.
    </DialogContentText>
    <DialogContentText>
      3.3. Портал не несе відповідальності за дії користувачів порталу, які
      порушують умови цієї угоди або порушують законодавство України.
    </DialogContentText>
    <DialogContentText>
      3.4. Користувач зобов'язується відшкодувати будь-які збитки, що виникли у
      порталу або третім особам внаслідок порушення користувачем умов цієї угоди
      або законодавства України.
    </DialogContentText>
    <br />
    <DialogContentText>Заключні положення</DialogContentText>
    <Divider />
    <DialogContentText>
      4.1. Ця угода є договором між користувачем та порталом і регулює
      використання послуг порталу.
    </DialogContentText>
    <DialogContentText>
      4.2. Усі спори, що виникають у зв'язкуз використанням послуг порталу,
      вирішуються шляхом переговорів між сторонами.
    </DialogContentText>
    <DialogContentText>
      4.3. У разі неможливості досягнення згоди між сторонами, спір може бути
      вирішено відповідно до законодавства України.
    </DialogContentText>
    <DialogContentText>
      4.4. Ця угода поширюється на всіх користувачів порталу "BeHealth" та є
      невід'ємною частиною використання його послуг.
    </DialogContentText>
    <DialogContentText>
      4.5. Якщо будь-який з пунктів цієї угоди вважається недійсним або
      несвоєчасно виконується, це не впливає на дійсність або здійснення інших
      положень цієї угоди.
    </DialogContentText>
    <DialogContentText>
      4.6. Ця угода набуває чинності з моменту згоди користувача з її умовами,
      яка виражається в активному використанні послуг порталу.
    </DialogContentText>
    <DialogContentText>
      4.7. Закінчення використання послуг порталу не звільняє користувача від
      відповідності умовам цієї угоди щодо використання послуг порталу до
      моменту припинення використання.
    </DialogContentText>
    <DialogContentText>
      4.8. У разі виникнення питань щодо умов цієї угоди, користувач може
      звернутися до порталу за допомогою контактної інформації, наданої на
      порталі.
    </DialogContentText>
  </DialogContent>
);

const dataProcessingAgreement = (
  <DialogContent>
    <DialogContentText>
      Даю згоду на обробку моїх персональних даних порталом "BeHealth"
      (https://behealth-phi.vercel.app/) з метою обробки даних. Я також
      підтверджую, що ознайомлений(-на) з умовами та політикою конфіденційності
      порталу "BeHealth", та погоджуюся з ними. Я розумію, що мої персональні
      дані будуть оброблятися відповідно до законодавства України та політики
      конфіденційності порталу "BeHealth".
    </DialogContentText>
  </DialogContent>
);

type agreementType = "user-agreement" | "data-agreement";

export function UserAgreement() {
  const {
    palette: {
      primary: { main: primaryColor },
    },
  } = useTheme();

  const [open, setOpen] = useState(false);
  const [agreementMode, setAgreementMode] =
    useState<agreementType>("user-agreement");

  const handleClickOpen = (agreementType: agreementType) => () => {
    setAgreementMode(agreementType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="caption">
        {"Реєструючись, я приймаю "}
        <span
          onClick={handleClickOpen("user-agreement")}
          style={{ color: primaryColor, cursor: "pointer" }}
        >
          {"умови угоди користувача"}
        </span>
        {" і "}
        <span
          onClick={handleClickOpen("data-agreement")}
          style={{ color: primaryColor, cursor: "pointer" }}
        >
          {"обробки персональних даних"}
        </span>
        {"."}
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"body"}
        aria-labelledby="User agreement"
      >
        <DialogTitle id="scroll-dialog-title">
          {agreementMode === "user-agreement"
            ? 'Угода користувача порталом "BeHealth"'
            : 'Згода на обробку персональних даних порталом "BeHealth"'}
        </DialogTitle>

        <Divider />
        
        {agreementMode === "user-agreement"
          ? userAgreement
          : dataProcessingAgreement}

        <DialogActions>
          <Button onClick={handleClose}>{"Закрити"}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
