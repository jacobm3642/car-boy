class Controls{
    constructor(type){
        this.forward = false
        this.left = false
        this.right = false
        this.back = false

        switch(type){
            case "KEYS":
                this.#addKeyControls();
                break
            case "DUMMY":
                this.forward = true;
                break;
        }

    }

    #addKeyControls(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.back = true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.back = false;
                    break;
            }
        }
    }
}