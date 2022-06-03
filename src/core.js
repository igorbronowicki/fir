import _ from 'underscore';
import Backbone from 'backbone';
import logger from "./util/logger.util";

// global event dispatcher
const core = _.extend({}, Backbone.Events, logger);

export default core;