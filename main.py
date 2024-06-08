from fastapi import FastAPI, Request
from speak import voiceNotif
from notification import notify

app = FastAPI()

@app.get("/pcNotifGet")
async def read_item():
    print("Request received from Node.js")
    return {'server': "online"}

@app.post("/pcNotif")
async def create_item(request: Request):
    item = await request.json()
    judul = item.get("judul")  
    body = item.get("desk")
    notify(judul,body)
    voiceNotif(judul)

    return {"message": "Item created successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# uvicorn main:app --host 0.0.0.0 --port 8000 --reload
