class string_system_top():
    esd_warning = '''All the products described on this page include ESD (electrostatic discharge) sensitive devices. Electrostatic charges as high as 4000V readily accumulate on the human body or test equipment and can discharge without detection.
Although the boards feature ESD protection circuitry, permanent damage may occur on devices subjected to high-energy electrostatic discharges. Therefore, proper ESD precautions are recommended to avoid performance degradation or loss of functionality. This includes removing static charge on external equipment, cables, or antennas before connecting to the device. '''

class string_hdl ():
    access_type = {
        'RO':{
            'name': 'Read-only',
            'description': 'Reads will return the current register value. Writes have no effect.'
        },
        'WO':{
            'name': 'Write-only',
            'description': 'Writes will change the current register value. Reads have no effect.'
        },
        'RW':{
            'name': 'Read-write',
            'description': 'Reads will return the current register value. Writes will change the current register value.'
        },
        'RW1C':{
            'name': 'Read,write-1-to-clear',
            'description': 'Reads will return the current register value. Writing the register will clear those bits of the register which were set to 1 in the value written. Bits are set by hardware.'
        },
        'RW1S':{
            'name': 'Read,write-1-to-set',
            'description': 'Reads will return the current register value. Writing the register will set those bits of the register which were set to 1 in the value written. Bits are cleared by hardware.'
        },
        'W1S':{
            'name': 'Write-1-to-set',
            'description': 'Writing the register will set those bits of the register which were set to 1 in the value written. Bits are cleared by hardware. Reads have no effect.'
        },
        'V':{
            'name': 'Volatile',
            'description': 'The V suffix indicates that the register is volatile and its content might change without software interaction. The value of registers without the volatile designation will not change without an explicit write done by software.'
        },
        'NA':{
            'name': 'No access',
            'description': 'Do not read or write the register.'
        }
    }
