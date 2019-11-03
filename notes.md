## 'pics' app notes; controlled and uncontrolled components

#pics  SearchBar flow:
a.) User types input
b.) Callback gets invoked
c.) We call setState with the new value
d.) Component renders
e.) Input element gets informed of its current/new value by state
^^ describes a controlled element

steps describing uncontrolled:
so conrtoled is using state to store data or using react component to control the metadata rather than storing data in the dom (or html/ on the page directly)
you can set default calue for thigns with the sate, and ultimatle control data/ content assigned to html elements through js
