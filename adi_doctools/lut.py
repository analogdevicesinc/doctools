
remote = "git@github.com:analogdevicesinc/{}.git"

lut = {
    'documentation': {
        'doc_folder': 'docs',
        'name': 'System Level',
        'branch': 'main',
        'release_format': 'const:latest',
        'default_branch': 'main',
        'visibility': 'public'
    },
    'hdl': {
        'doc_folder': 'docs',
        'extra': (
            # cwd      # cmd            # no_parallel
            "library", ["make", "all"], False
        ),
        'name': 'HDL',
        'branch': 'main',
        'release_format': 'halves',
        'default_branch': 'main',
        'visibility': 'public'
    },
    'no-OS': {
        'doc_folder': 'doc/sphinx/source',
        'name': 'no-OS',
        'branch': 'main',
        'release_format': 'const:latest_commit',
        'default_branch': 'main',
        'visibility': 'public'
    },
    'pyadi-iio': {
        'doc_folder': 'doc',
        'name': 'pyadi-iio',
        'branch': 'main',
        'release_format': 'semantic',
        'default_branch': 'main',
        'visibility': 'public'
    },
    'doctools': {
        'doc_folder': 'docs',
        'name': 'Doctools',
        'branch': 'main',
        'release_format': 'semantic',
        'default_branch': 'main',
        'visibility': 'public-hidden'
    },
}


def get_lut():
    # TODO dynamic lut fetch
    return lut
