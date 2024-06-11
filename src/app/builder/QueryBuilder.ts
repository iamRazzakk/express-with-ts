import { FilterQuery } from "mongoose";
import { Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query
    }

    search(searchAbleFields: string[]) {
        if (this?.query?.searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: this.query.searchTerm, $options: "i" }
                }) as FilterQuery<T>
                )
            })
        }
        return this;
    }

    fielter() {
        const queryObj = { ...this.query };
        const excludesFields = ["searchTerm", "sort", "limit", "page", "field"];
        excludesFields.forEach(el => delete queryObj[el]);

        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>)
        return this;
    }

}