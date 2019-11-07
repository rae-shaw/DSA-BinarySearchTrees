const BinarySearchTree = require('./BinarySearchTree.js')

const BST = new BinarySearchTree


BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(6)
BST.insert(9)
BST.insert(2)
BST.insert(5)
BST.insert(7)

//could also use forEach()

E A S Y Q U E S T I O N

BST.insert(E)
BST.insert(A)
BST.insert(S)
BST.insert(Y)
BST.insert(Q)
BST.insert(U)
BST.insert(E)


function maxHeight(root){
    if(!root){
        return 0
    }

    let left = maxHeight(root.left)
    let right = maxHeight(root.right)

    return Math.max(left, right) + 1;
}

function isBST(root){
    if(!root){
      return true; 
   }
 
   if(root.left != null && root.left.value > root.value){ 
     return false;
   }
 
   if(root.right !=null && root.right.value < root.value) {
     return false;
   }
 
   if(!isBST(root.left) || !isBST(root.right)) {
     return false;
   }
 
   return true;  
 }

 function minHeight(root){
    if(!root){
        return 0
    }

    let left = minHeight(root.left)
    let right = minHeight(root.right)

    return Math.min(left, right) + 1
}

function isBalanced(root){
    if(!root){
        return undefined
    }  
    return maxHeight(root) - minHeight(root) <= 1;
}

function searching(){

  const tree = new BST()

  const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

  for(let i = 0; i < arr.length; i++) {
    tree.insert(arr[i], arr[i])
}
