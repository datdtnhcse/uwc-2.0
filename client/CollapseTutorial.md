1. Read file Assign.js -> You will see a hook to set state (open or not) of the Janitor collapse, do the same thing with Collector collapse, remember to use another variable. You will write this hook (a hook is: 
   ```javascript
    const [janitorstatus, setJanitorstatus] = useState(false);
    ```
You will write a hook like that, but rename all of attribute for collector.


2. After finishing step 1, you will create 2 files: CollectorCard.js and CollectorCollapse.js. 
   **Remember in collapse, we have an ID to connect between the button to the collapse. The aria-controls in button and ID in collapse that have the same name will work together.** (Read carefully the Collapse of Janitor to understand more!)
3. Now, you will modify 2 files above according to 2 files JanitorCard.js and JanitorCollapse.js. No need to think about HTML or CSS, I have already implemented it for us.