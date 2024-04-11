
remote = "git@github.com:analogdevicesinc/{}.git"

lut = {
    'documentation': {
        'doc_folder': 'docs',
        'name': 'System Level',
        'branch': 'main',
        'release_format': 'const:latest',
        'visibility': 'public',
        'topic': {
            'eval': 'Evaluation Boards',
            'university': 'University Program',
        }

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
        'visibility': 'public'
    },
    'no-OS': {
        'doc_folder': 'doc/sphinx/source',
        'name': 'no-OS',
        'branch': 'main',
        'release_format': 'const:latest_commit',
        'visibility': 'public'
    },
    'pyadi-iio': {
        'doc_folder': 'doc',
        'name': 'pyadi-iio',
        'branch': 'main',
        'release_format': 'semantic',
        'visibility': 'public'
    },
    'precision-converters-firmware': {
        'doc_folder': 'doc/sphinx',
        'name': 'Precision Converters Firmware',
        'branch': 'main',
        'release_format': 'const:latest',
        'visibility': 'public'
    },
    'doctools': {
        'doc_folder': 'docs',
        'name': 'Doctools',
        'branch': 'main',
        'release_format': 'semantic',
        'visibility': 'public-hidden'
    },
    'PrecisionToolbox': {
        'doc_folder': 'docs',
        'name': 'Precision Toolbox',
        'branch': 'main',
        'release_format': 'const:latest',
        'visibility': 'public'
    },
}


def get_lut():
    # TODO dynamic lut fetch
    return lut
