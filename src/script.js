let drag = document.querySelectorAll('.todo');
        let todo = document.querySelectorAll('.drag');
        let draggetItem = null;
        for(let i=0; i<drag.length; i++){
          const iner = drag[i];
          iner.addEventListener('dragstart', function(){
            draggetItem = iner;
            setTimeout(function(){
              iner.style.display = 'none';
            }, 0);
          });
          iner.addEventListener('dragend', function(){
            setTimeout(function(){
              iner.style.display = 'block';
              draggetItem = null;
            }, 0);
          });
          for(let j=0; j<todo.length; j++){
            const list = todo[j];
            list.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            list.addEventListener('dragenter', function(e){
                e.preventDefault();
            })
            list.addEventListener('drop', function(e){
                this.append(draggetItem);
            })
          }
        }