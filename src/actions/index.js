export let increment = () => {
  return {
    type: "INCREMENT",
  };
};

export let decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export let increment_5 = () => {
  return {
    type: "INCREMENT_5",
  };
};

export let decrement_5 = () => {
  return {
    type: "DECREMENT_5",
  };
};

export let empty=()=>{
  return {
    type:'EMPTY'
  }
}



export let login=() => {
  return{
    type: "LOGIN"
  }
}

export let logout=() => {
  return{
    type: "LOGOUT"
  }
}