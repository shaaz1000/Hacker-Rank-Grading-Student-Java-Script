function gradingStudents(grades) {
    let roundedGrades = []
    
    for(let i = 0 ; i < grades.length ; i++){
      
      if(grades[i]%5==1 && grades[i] >= 38){
        if(grades[i] + 4 -grades[i] < 3){
          roundedGrades.push(grades[i])
        }
        else{
          roundedGrades.push(grades[i])
        }
      }
      else if(grades[i]%5==2 && grades[i] >= 38){
        if(grades[i] + 3 -grades[i] < 3){
          roundedGrades.push(grades[i] + 3)
        }
        else{
          roundedGrades.push(grades[i])
        }
      }
      else if(grades[i]%5==3 && grades[i] >= 38){
        if(grades[i] + 2 - grades[i] < 3){
          
          roundedGrades.push(grades[i] + 2)
        }
        else{
          roundedGrades.push(grades[i])
        }
      }
      else if(grades[i]%5==4 && grades[i] >= 38){
        if(grades[i] + 1 - grades[i] < 3){
          roundedGrades.push(grades[i] + 1)
        }
        else{
          roundedGrades.push(grades[i])
        }
      }
      else if(grades[i]%5==0 && grades[i] >= 38){
        //grades[i]
        roundedGrades.push(grades[i])
      }
      else if(grades[i] < 38){
        roundedGrades.push(grades[i])
      }
    }
    return roundedGrades.map((item)=>{
      return item
    })

}

// console.log(gradingStudents([73,67,38,33]))