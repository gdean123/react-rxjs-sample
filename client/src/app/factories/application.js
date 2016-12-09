import {createSources} from './sources'
import {createStreams} from './streams'
import {createComponents} from './components'
import {createSinks} from './sinks'

export const createApplication = () => {
    const sources = createSources();
    const streams = createStreams(sources);
    const sinks = createSinks(sources, streams);
    const components = createComponents(sources, streams);

    return {sources, streams, sinks, components}
};