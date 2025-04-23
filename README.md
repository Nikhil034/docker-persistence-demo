Run below command to take walk through how everything is work 

# Step 1: Build and start
docker compose up --build

# Step 2: Add a note
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"text":"Hello Docker!"}'

# Step 3: View notes
curl http://localhost:3000/notes

# Step 4: Stop everything
docker compose down

# Step 5: Restart
docker compose up

# Step 6: View notes again – they should still be there ✅
curl http://localhost:3000/notes
