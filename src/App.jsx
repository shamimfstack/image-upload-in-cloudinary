import { useState } from "react"


function App() {
  const [ image, setImage ] = useState("")

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    // data.append("upload_preset", "upload_preset_name")
    data.append("upload_preset", "shamimfstack")
    // data.append("cloud_name", "cloud_name")
    data.append("cloud_name", "dixhlm8rp")

    fetch("https://api.cloudinary.com/v1_1/dixhlm8rp/image/upload", {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div>
        <div>
          <input type="file" onChange={e => setImage(e.target.files[0])} />
          <button onClick={submitImage}>upload</button>
        </div>
        { image ? <img src={image} /> : "No image chosen"}
      </div>
    </>
  )
}

export default App
 
