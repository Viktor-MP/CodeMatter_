// ====================therd way of dragging ====================================


// Select the resizers

// const bottom = document.querySelector("#resizable .resizer-bottom");

//sides "t" (top),"r" (right),"b" (bottom),"l" (left)

const windowWidth = window.innerWidth



const getPersent = (eny) => {
    return windowWidth * eny / 100
}

const getMiMa = {
    min: 25,
    max: 45,
}



const setUpEvent = (resizer, resizableChat, xOrY = "x") => {

    const isX = xOrY === "x";
    const parentElement = resizer.parentElement  
    // Define event handlers
    const mouseDownHandler = (e) => {
      // Store initial mouse position and width
      resizer.parentInitialPosition = { x: e.pageX, y: e.pageY };
      resizableChat.parentInitialPosition = { x: e.pageX, y: e.pageY };
  
      const rect = parentElement.getBoundingClientRect();
      const chatRect = resizableChat.getBoundingClientRect();
  
      resizer.parentInitialDimension = {
          w: parseInt(rect.width),
          h: parseInt(rect.height)
      };
      resizableChat.parentInitialDimension = {
          w: parseInt(chatRect.width),
          h: parseInt(chatRect.height)
      }
  
      // Attach move and out events
      resizer.addEventListener("mousemove", mouseMoveHandler);
      resizer.addEventListener("mouseout", mouseMoveHandler);
  
      // Detach down event to prevent accumulation
      resizer.removeEventListener("mousedown", mouseDownHandler);
    };
  
    const mouseUpHandler = (e) => {
      // Detach move and out events
      resizer.removeEventListener("mousemove", mouseMoveHandler);
      resizer.removeEventListener("mouseout", mouseMoveHandler);
  
      // Reattach down event
      resizer.addEventListener("mousedown", mouseDownHandler);
    };
  
    const mouseMoveHandler = (e) => {
      const nextPosition = { x: e.pageX, y: e.pageY };
      
      if (nextPosition.x < getPersent(getMiMa.min) || nextPosition.x > getPersent(getMiMa.max) ) return;
      
      if (isX) {
          const newWidthRes = resizableChat.parentInitialDimension.w - 
          (nextPosition.x - resizableChat.parentInitialPosition.x);
  
          const newWidth =
          resizer.parentInitialDimension.w +
          (nextPosition.x - resizer.parentInitialPosition.x);
  
          resizableChat.style.width = newWidthRes + "px"
          parentElement.style.width = newWidth + "px";
      } else {
        const newHeight =
          resizer.parentInitialDimension.h +
          (nextPosition.y - resizer.parentInitialPosition.y);
        parentElement.style.height = newHeight + "px";
      }
     
    };
  
    // Attach initial down event
    resizer.addEventListener("mousedown", mouseDownHandler);
  
    // Attach up event to window to cover the case where mouse button is released outside the resizer
    window.addEventListener("mouseup", mouseUpHandler);
  }
//   setUpEvent(resizer, personalChat, "x");
  // setUpEvent(bottom, "y");

  export default setUpEvent;