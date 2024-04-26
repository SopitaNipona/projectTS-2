import dynamodb from '../services/dynamodbService';
import joi from 'joi';
import { PREFIX_NAME } from '../config';
import { Timestamp } from 'mongodb';
import { Schema } from 'mongoose';

const schema = joi.object().keys({
    hashKey: 'DeptoId',
    timestamps: false,
    schema: {
        DeptoId: dynamodb.types.uuid(),
        Nombre: joi.string(),
        numAgent: joi.number()
    },
    tableName: `Departamento${PREFIX_NAME}`
});

dynamodb.createTables(schema, (err) => {

    if (err) {
        console.log('Error creating tables: ', err);
    } else {
        console.log('Tables has been created');
    }
});