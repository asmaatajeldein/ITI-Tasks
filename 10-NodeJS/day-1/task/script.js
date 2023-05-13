const fs = require('fs');
const { Command, Option } = require('commander');

function readDB() {
    const dataString = fs.readFileSync('./db.json', {encoding:'utf-8'});
    const data = JSON.parse(dataString);
    return data;
}

const program = new Command();


program.command('add')
        .requiredOption('-t, --title <title>', 'the title of the entry')
        .option('-i, --id <number>', 'id of the entry')
        .action((options) => {
            const data = readDB();

            // const itemID = data.length > 0? data[data.length - 1].id : 0;
            const newEntry = {
                id: options.id? +options.id : data.length? data[data.length - 1].id + 1 : 1,
                title: options.title,
                date: Date.now(),
                status: "to-do"
            }

            data.push(newEntry);

            fs.writeFileSync('./db.json', JSON.stringify(data, null, 2), {encoding:'utf-8'});
        })



program.command('list')
        .description('lists all entries')
        .addOption(new Option('-s, --status <string>').choices(["to-do","in-progress","done"]))
        .action((options)=>{
            if(!options.status) {
                console.log(readDB());
            }

            const data = readDB();
            const filteredData = data.filter(entry => entry.status === options.status);

            console.log(filteredData);
        })

program.command('edit')
        .description('make individual edits to entries')
        .option('-t, --title <string>', 'title of the entry')
        .requiredOption('-i, --id <number>', 'id of the entry')
        .addOption(new Option('-s, --status <string>').choices(["to-do","in-progress","done"]))
        .action((options)=>{
            const data = readDB();
            // console.log(options)

            const newData = data.map(entry => {
                if (entry.id === +options.id) {
                    entry.title = options.title || entry.title;
                    entry.status = options.status || entry.status;
                }
                return entry;
            });

            fs.writeFileSync('./db.json', JSON.stringify(newData, null, 2), {encoding:'utf-8'})
        })

program.command('delete')
        .description('deletes specified entry')
        .requiredOption('-i, --id <number>', 'id of the entry')
        .action((options) => {
            const data = readDB();
            const newData = data.filter(entry => entry.id !== +options.id);
            fs.writeFileSync('./db.json', JSON.stringify(newData, null, 2), {encoding:'utf-8'})
        })


program.parse();