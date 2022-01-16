function newImage(imageSrc, imageLeft, imageBottom) {
let newElement = document.createElement('img')
newElement.src = imageSrc
newElement.style.position = 'fixed'
newElement.style.left = imageLeft
newElement.style.bottom = imageBottom
document.body.append(newElement)
}

function newItem(itemSrc, itemLeft, itemBottom) {
    let newItemElement = document.createElement('img')
    newItemElement.src = itemSrc
    newItemElement.style.position = 'fixed'
    newItemElement.style.left = itemLeft
    newItemElement.style.bottom = itemBottom
    
    document.body.append(newItemElement)

    newItemElement.addEventListener('dblclick', function() {newItemElement.remove()})
    }
function backgroudGrass() {
    document.body.style.backgroundRepeat = repeat
    

}



newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')



// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


