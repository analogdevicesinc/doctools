from sphinx.environment.collectors.toctree import TocTreeCollector

def monkeypatch_figure_numbers():
    """
    Reset reference counting per page, even when the toctree is not numbered.
    If the toctree is numbered, the offset should resolve as 0.
    """
    old_assign_figure_numbers = TocTreeCollector.assign_figure_numbers

    def assign_figure_numbers(self, env):
        rewrite_needed = old_assign_figure_numbers(self, env)
        for entry in env.toc_fignumbers:
            for type_ in  env.toc_fignumbers[entry]:
                if len(env.toc_fignumbers[entry][type_]) > 0:
                    offset = env.toc_fignumbers[entry][type_][next(iter(env.toc_fignumbers[entry][type_]))][-1] - 1
                    for id_ in env.toc_fignumbers[entry][type_]:
                        tuple_ = list(env.toc_fignumbers[entry][type_][id_])
                        tuple_[-1] = tuple_[-1]-offset
                        env.toc_fignumbers[entry][type_][id_] = tuple(tuple_)
        return rewrite_needed

    TocTreeCollector.assign_figure_numbers = assign_figure_numbers
