## Assumptions
- Clients may retry requests  
- Each logical operation has a unique request ID  
- Database supports transactions and unique constraints  
- System runs in a single region with moderate traffic  

## Double Counting Prevention
- Idempotent request handling using unique request IDs  
- Database-level unique constraints  
- Atomic write operations  

## Database Failure Mid-Request
- All operations run inside a transaction  
- On failure, the transaction is rolled back  
- Client receives an error response  
- No partial or inconsistent data is written  

## What Breaks First at Scale
- Database write throughput  
- Increased API latency due to synchronous processing  
