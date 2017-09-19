import 'whatwg-fetch'

require("babel-polyfill");

/**
 * The Reader class exists to read in the JSON file that this whole webserver relies on.
 */
class Reader {

    /**
     * We call init as a factory method to make sure that the central parts of this are defined
     */
    static init()
    {
        if (typeof this.read_doc == 'undefined')
        {
            //Initialise read_doc
            this.read_doc = null;
        }
    }

    /**
     * In _import_doc, we read in the whole file and return the json information from it to the caller.
     *
     * @param doc_name The name of the doc that we're reading in
     * @returns {Promise.<TResult>} We promise to return some JSON information about the file
     * @private
     */
    static async _import_doc(doc_name)
    {
        try
        {
            return await fetch(doc_name).then(function (res) {
                return res.json();
            }).then(function (json) {
                return json;
            });
        } catch (e)
        {
            console.error("Failed to fetch " + doc_name, e);
        }
    }

    /**
     * The read_docs public method acts as a factory of sorts and reads the whole of the file in again if read_doc
     * has not yet been set. But once it has, we just send it straight back.
     *
     * @param doc_name The name of the document we're reading in
     * @returns {Promise.<null|*>}
     */
    static async read_docs(doc_name)
    {
        //If we have already read through the file once...
        if (this.read_doc !== null)
        {
            //Just send that back instead
            return this.read_doc;
        }
        //But since we haven't read it yet, read it now and return all the info
        this.read_doc = await Reader._import_doc(doc_name);
        return this.read_doc;
    }
}

/**
 * Mask for dealing with the Reader class.
 *
 * @param doc_name The name of the json file we would like to read
 * @returns {Promise.<null|*>}
 */
export async function read_docs(doc_name)
{
    Reader.init();
    return Reader.read_docs(doc_name);
}
