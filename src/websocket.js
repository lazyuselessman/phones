export function getConfiguredWS(store) {
  const ws = new WebSocket(`ws://127.0.0.1:8000/ws`);
  // eslint-disable-next-line
  ws.onopen = function (event) {
    console.log("Successfully connected to the websocket...");
  };

  ws.onmessage = async function (event) {
    const data = JSON.parse(event.data);
    switch (data["type"]) {
      case "number_add": {
        console.log("phones receive: Number was added");
        store.dispatch("LOAD_PHONES");
        break;
      }
      case "number_update": {
        console.log("phones receive: Number was updated");
        store.dispatch("LOAD_PHONES");
        break;
      }
      case "number_delete": {
        console.log("phones receive: Number was deleted");
        store.dispatch("LOAD_PHONES");
        break;
      }
      case "calculate_numbers": {
        console.log("calculate numbers task!");
        const taskObj = data["completedTask"];
        await store.dispatch("ADD_COMPLETED_TASK", taskObj);
        break;
      }
      default:
        console.log(`Unknown event with type ${data["type"]}`);
        break;
    }
  };
  return ws;
}
