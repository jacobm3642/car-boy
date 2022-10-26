class nerulNetwork{
    constructor(neroncounts){
        this.levels = []
        for(let i=0; i<neroncounts.length-1;i++){
            this.levels.push(new level(
                neroncounts[i],neroncounts[i+1]
            ));
        }
    }

    static feedForward(giveninputs, network){
        let outputs = level.feedForward(giveninputs,network.levels[0]);
        for(let i = 1;i<network.levels.length;i++){
            outputs=level.feedForward(outputs,network.levels[i]);
        }
        return outputs
    }
}




class level{
    constructor(inputcount, outputcount){
        this.inputs = new Array(inputcount);
        this.outputs = new Array(outputcount);
        this.biases = new Array(outputcount)

        this.weights = [];
        for(let i = 0;i<inputcount;i++){
            this.weights[i]=new Array(outputcount);
        }

        level.#randomize(this);
    }

    static #randomize(level){
        for(let i = 0;i<level.inputs.length;i++){
            for(let j = 0;j<level.outputs.length;j++){
                level.weights[i][j]=Math.random()*2-1;
            }
        }
        for(let i = 0;i<level.biases.length;i++){
            level.biases[i]=Math.random()*2-1;
        }
    }

    static feedForward(giveninputs, level){
        for(let i = 0;i<level.inputs.length;i++){
            level.inputs[i]=giveninputs[i];
        }
        for(let i = 0;i<level.outputs.length;i++){
            let sum = 0
            for(let j = 0;j<level.inputs.length;j++){
                sum += level.inputs[j]*level.weights[j][i];
            }

            if(sum>level.biases[i]){
                level.outputs[i]=1
            }else{
                level.outputs = 0
            }
        }

        return level.outputs
    }
}