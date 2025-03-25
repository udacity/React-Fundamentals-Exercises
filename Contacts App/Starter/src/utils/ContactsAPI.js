let db = {};

const defaultData = {
  contacts: [
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@richardkalehoff",
      avatarURL: "richard.jpg",
    },
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "@karen_isgrigg",
      avatarURL: "karen.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "@tylermcginnis",
      avatarURL: "tyler.jpg",
    },
  ],
};

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

const getDataForToken = () => {
  let data = db[token];

  if (data == null) {
    data = db[token] = JSON.parse(JSON.stringify(defaultData));
  }

  return data;
};

const addContact = (contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8);
  }

  getDataForToken().contacts.push(contact);

  return contact;
};

const removeContact = (id) => {
  const data = getDataForToken();
  const contact = data.contacts.find((c) => c.id === id);

  if (contact) {
    data.contacts = data.contacts.filter((c) => c !== contact);
  }

  return { contact };
};

export const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getDataForToken().contacts);
    }, 200);
  });
};

export const remove = (contact) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(removeContact(contact.id).contact);
    }, 200);
  });
};

export const create = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(addContact(body));
    }, 200);
  });
};
