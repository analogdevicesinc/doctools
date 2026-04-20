<!-- lastmod 2026-01-29 -->
<!-- image -->

## OVERVIEW

This  reference  manual  describes  the  digital  communications  capabilities  of  the  LT7176\_LT7176-1,  including  the functionality of each LT7176\_LT7176-1 Power Management Bus (PMBus) command. Refer to these specifications for more information regarding the bus protocol details.

-  PMBus Specification Revision 1.3.1
-  SMBus Specification Revision 3.1

Tel: 781.329.4700

<!-- image -->

## LT7176\_LT7176-1 PMBus/I 2 C Reference Manual

## TABLE OF CONTENTS

Overview  ................................................................................................................................................................................................  1

PMBus/SMBus/I 2 C .................................................................................................................................................................................  6

PMBus/SMBus/I 2 C Capabilities  .........................................................................................................................................................  6

Similarities Between PMBus, SMBus, and I

2

C 2-Wire Interface .......................................................................................................  6

Communication Protection  ..............................................................................................................................................................  6

Addressing and Communications ........................................................................................................................................................  7

Device Addressing.............................................................................................................................................................................  7

Communication Recommendations ................................................................................................................................................  7

PMBus Command Summary .................................................................................................................................................................  8

PMBus Command Details ...................................................................................................................................................................  16

Addressing and Write Protection ...................................................................................................................................................  16

PAGE ...........................................................................................................................................................................................  16

PAGE\_PLUS\_WRITE ....................................................................................................................................................................  16

PAGE\_PLUS\_READ ......................................................................................................................................................................  17

ZONE\_CONFIG ............................................................................................................................................................................  17

ZONE\_ACTIVE .............................................................................................................................................................................  17

WRITE\_PROTECT ........................................................................................................................................................................  18

MFR\_Address ..............................................................................................................................................................................  18

MFR\_RAIL\_Address  .....................................................................................................................................................................  19

General Configuration ....................................................................................................................................................................  20

MFR\_CHAN\_CONFIG\_LT7176 .....................................................................................................................................................  20

MFR\_CONFIG\_ALL\_LT7176 ........................................................................................................................................................  21

On, Off, and Margin ....................................................................................................................................................................  21

Operation ...................................................................................................................................................................................  22

ON\_OFF\_CONFIG ........................................................................................................................................................................  22

MFR\_RESET.................................................................................................................................................................................  22

PWM Configuration .........................................................................................................................................................................  22

FREQUENCY\_SWITCH .................................................................................................................................................................  23

MFR\_PWM\_MODE\_LT7176 .........................................................................................................................................................  23

MFR\_PWM\_PHASE\_LT7176 ........................................................................................................................................................  24

MFR\_SYNC\_CONFIG\_LT7176  ......................................................................................................................................................  25

Input Voltage and Limits ................................................................................................................................................................  26

VIN\_ON .......................................................................................................................................................................................  26

VIN\_OFF ......................................................................................................................................................................................  26

VIN\_UV\_WARN\_LIMIT .................................................................................................................................................................  26

Output Voltage and Limits .............................................................................................................................................................  27

VOUT\_MODE ...............................................................................................................................................................................  28

VOUT\_COMMAND .......................................................................................................................................................................  28

VOUT\_MAX ..................................................................................................................................................................................  28

VOUT\_MARGIN\_HIGH .................................................................................................................................................................  28

VOUT\_MARGIN\_LOW ..................................................................................................................................................................  29

VOUT\_OV\_FAULT\_LIMIT  .............................................................................................................................................................  29

VOUT\_OV\_WARN\_LIMIT .............................................................................................................................................................  29

VOUT\_UV\_WARN\_LIMIT .............................................................................................................................................................  30

VOUT\_UV\_FAULT\_LIMIT .............................................................................................................................................................  30

MFR\_DISCHARGE\_THRESHOLD .................................................................................................................................................  30

MFR\_PGOOD\_DELAY ..................................................................................................................................................................  31

MFR\_NOT\_PGOOD\_DELAY .........................................................................................................................................................  31

Output Current Limits ....................................................................................................................................................................  31

IOUT\_OC\_WARN\_LIMIT ..............................................................................................................................................................  32

Temperature ...................................................................................................................................................................................  32

OT\_FAULT\_LIMIT ........................................................................................................................................................................  32

OT\_WARN\_LIMIT ........................................................................................................................................................................  32

Timing .............................................................................................................................................................................................  33

VOUT\_TRANSITION\_RATE ..........................................................................................................................................................  33

TON\_DELAY.................................................................................................................................................................................  33

TON\_RISE ...................................................................................................................................................................................  34

TON\_MAX\_FAULT\_LIMIT ............................................................................................................................................................  34

Sequencing Off ...........................................................................................................................................................................  34

TOFF\_DELAY ...............................................................................................................................................................................  35

TOFF\_FALL  ..................................................................................................................................................................................  35

TOFF\_MAX\_WARN\_LIMIT............................................................................................................................................................  35

Fault Response ...............................................................................................................................................................................  36

MFR\_RETRY\_DELAY ....................................................................................................................................................................  36

Input Voltage ..............................................................................................................................................................................  36

VIN\_OV\_FAULT\_RESPONSE .......................................................................................................................................................  36

Output Voltage ...........................................................................................................................................................................  37

VOUT\_OV\_FAULT\_RESPONSE....................................................................................................................................................  38

VOUT\_UV\_FAULT\_RESPONSE ....................................................................................................................................................  39

TON\_MAX\_FAULT\_RESPONSE ...................................................................................................................................................  40

Output Current ...........................................................................................................................................................................  41

IOUT\_OC\_FAULT\_RESPONSE ....................................................................................................................................................  41

Temperature  ...............................................................................................................................................................................  42

OT\_FAULT\_RESPONSE ...............................................................................................................................................................  42

Fault Sharing  ...................................................................................................................................................................................  43

MFR\_FAULT\_PROPAGATE\_LT7176 ............................................................................................................................................  43

MFR\_FAULT\_RESPONSE ............................................................................................................................................................  44

Identification ..................................................................................................................................................................................  44

Status ..............................................................................................................................................................................................  44

CLEAR\_FAULTS ...........................................................................................................................................................................  46

SMBALERT\_MASK .......................................................................................................................................................................  46

STATUS\_BYTE .............................................................................................................................................................................  47

STATUS\_WORD ...........................................................................................................................................................................  47

STATUS\_VOUT ............................................................................................................................................................................  48

STATUS\_IOUT .............................................................................................................................................................................  48

STATUS\_INPUT  ...........................................................................................................................................................................  48

STATUS\_TEMPERATURE ............................................................................................................................................................  49

STATUS\_CML ..............................................................................................................................................................................  49

STATUS\_MFR\_SPECIFIC .............................................................................................................................................................  49

MFR\_PIN\_CONFIG\_STATUS .......................................................................................................................................................  50

MFR\_PADS\_LT7176 ....................................................................................................................................................................  50

MFR\_COMMON ...........................................................................................................................................................................  50

MFR\_CHANNEL\_STATE...............................................................................................................................................................  51

Telemetry ........................................................................................................................................................................................  51

IOUT\_CAL\_OFFSET .....................................................................................................................................................................  52

READ\_VIN ....................................................................................................................................................................................  52

READ\_VOUT ................................................................................................................................................................................  52

READ\_IOUT .................................................................................................................................................................................  52

READ\_TEMPERATURE\_1  .............................................................................................................................................................  52

READ\_FREQUENCY .....................................................................................................................................................................  52

MFR\_READ\_EXTVCC....................................................................................................................................................................  52

MFR\_READ\_ITH  ...........................................................................................................................................................................  52

MFR\_READ\_ASEL ........................................................................................................................................................................  53

MFR\_IOUT\_PEAK ........................................................................................................................................................................  53

<!-- image -->

| MFR_ADC_CONTROL_LT7176....................................................................................................................................................53                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MFR_VOUT_PEAK.......................................................................................................................................................................54                |
| MFR_VIN_PEAK...........................................................................................................................................................................54             |
| MFR_TEMPERATURE_1_PEAK....................................................................................................................................................54                          |
| MFR_READ_PWM_CFG ...............................................................................................................................................................54                    |
| MFR_READ_VOUT_CFG ..............................................................................................................................................................54                    |
| MFR_CLEAR_PEAKS....................................................................................................................................................................55                 |
| NVMCommands .............................................................................................................................................................................55           |
| Store/Restore .............................................................................................................................................................................55         |
| STORE_USER_ALL......................................................................................................................................................................55                |
| RESTORE_USER_ALL..................................................................................................................................................................56                  |
| MFR_COMPARE_USER_ALL........................................................................................................................................................56                        |
| MFR_USER_DATA_00 and MFR_USER_DATA_01.......................................................................................................................56                                        |
| MFR_DISABLE_OUTPUT.............................................................................................................................................................56                     |
| MFR_NVM_USER_WRITES_REMAINING.....................................................................................................................................56                                  |
| MFR_NVM_USER_WP .................................................................................................................................................................56                   |
| Revision History ..................................................................................................................................................................................58 |

## PMBus/SMBus/I 2 C

## PMBus/SMBus/I 2 C Capabilities

The LT7176/LT7176-1 serial interface is PMBus compliant and can operate at any frequency between 10kHz and 1MHz. The device address is configurable using the nonvolatile memory (NVM). The serial interface supports the following protocols defined in the PMBus and SMBus specifications:

-  Send Byte, Write Byte, Write Word, Block Write
-  Read Byte, Read Word, Block Read
-  Alert Response Address
-  PAGE\_PLUS\_READ, PAGE\_PLUS\_WRITE
-  Zone Write
-  SMBALERT\_MASK Read and Write.

The LT7176/LT7176-1 pulls the ALERT pin low to indicate conditions that may require attention. See the Status in the PMBus Command Details section for more information.

## Similarities Between PMBus, SMBus, and I 2 C 2-Wire Interface

The PMBus 2-wire interface is an incremental extension of the SMBus. SMBus is built upon I 2 C with some minor differences in timing, DC parameters, and protocol. The PMBus/SMBus protocols are more robust than simple I 2 C byte commands because PMBus/SMBus provides timeouts to prevent persistent bus errors and optional packet error checking (PEC) to ensure data integrity. In general, a bus controller device that can be configured for I 2 C communication can be used for PMBus communication with little or no change to hardware or firmware. Repeat start (restart) is not supported by all I 2 C controllers, but is required for I 2 SMBus/PMBus reads. If a general-purpose I 2 C controller is used, check that repeat start is supported.

For a description of the minor extensions and exceptions PMBus adds to SMBus, refer to PMBus Specification Part 1 Revision 1.3.1: Section 5: Transport.

For a description of the differences between SMBus and I 2 C, refer to System Management Bus (SMBus) Specification Version 3.1: Appendix B -Differences Between SMBus and I 2 C.

## Communication Protection

All read operations return a valid PEC if the PMBus controller requests it. If Bit 2 of the MFR\_CONFIG\_ALL\_LT7176 command is set, the PMBus write operations are not acted upon until a valid PEC is received by the LT7176/LT71761. If a PEC is included in a command write, that PEC must be valid, or a PEC write error occurs, regardless of the value of Bit 2 of the MFR\_CONFIG\_ALL\_LT7176 command.

If  a  PEC  write  error  occurs,  an  attempt  is  made  to  access  unsupported  commands,  or  invalid  data  is  written  to supported commands, the LT7176/LT7176-1 ignores the command, sets the communications, memory, and logic (CML)  bit  in  the  STATUS\_BYTE  and  STATUS\_WORD  commands,  sets  the  appropriate  bit  in  the  STATUS\_CML command, and pull the ALERT pin low.

## ADDRESSING AND COMMUNICATIONS

## Device Addressing

The LT7176/LT7176-1 offer addressing modes that provide flexible ways to control multiple channels at once or individually.

Device addressing is the standard way to communicate with a single instance of the LT7176/LT7176-1. The value of the device address is set by the MFR\_ADDRESS command and the ASEL pin. Device addressing can be disabled by writing a value of 0x80 to the MFR\_ADDRESS command. If MFR\_ADDRESS cannot be read from NVM due to an NVM fault, the device address is set to 0x7C.

Global addressing provides a means to address all LT7176/LT7176-1 devices on the bus. The LT7176/LT7176-1 global addresses are fixed at 0x5A (7-bit notation) and 0x5B. They cannot be disabled. Do not read from global addresses because multiple devices may respond simultaneously. Other Analog Devices, Inc., device types may respond at one or both global addresses.

Rail addressing provides a means to control multiple channels simultaneously. While similar to global addressing, the rail address can be dynamically assigned with the MFR\_RAIL\_ADDRESS command, allowing any logical grouping of  channels that may be required for reliable system control. Do not read from rail addresses because multiple devices may respond.

Zone write addressing provides a means to write to a set of channels. The set of channels can be distributed across multiple devices. Each channel is programmed to be part of a zone by programming the selected zone number to the ZONE\_CONFIG command. This configuration only needs to be performed once. After zone configuration, the bus controller uses the ZONE\_ACTIVE command to select the active zone. If the configured zone of a channel matches the active zone or the active zone is set to all zones, the channel responds to subsequent ZONE\_WRITE operations. A ZONE\_WRITE operation is started when the bus controller uses the ZONE\_WRITE address (0x37, 7-bit notation) as the device address in an SMBus write command.

All  means  of  PMBus  addressing  require  the  user  to  employ  disciplined  planning  to  avoid  addressing  conflicts. Communication to LT7176/LT7176-1 devices at global and rail addresses are limited to command write operations.

## Communication Recommendations

If PMBus commands are received faster than they are being processed, the LT7176/LT7176-1 may become too busy to handle new commands. If a command is written when the LT7176/LT7176-1 are busy processing a command, the devices ignore that command, set Bit 7 of STATUS\_BYTE, and pull the ALERT pin low. Bit 6 of MFR\_COMMON sets to 1  when the  LT7176/LT7176-1  are  ready  to  accept  commands.  This  bit  can  be  polled  before  writing  commands. Alternatively, clock stretching can be enabled. Clock stretching is enabled by setting Bit 1 of MFR\_CONFIG\_ALL\_LT7176.

NVM commands may take longer to process, including STORE\_USER\_ALL and MFR\_COMPARE\_USER\_ALL. In these cases, either poll Bit 6 of MFR\_COMMON or enable clock stretching to avoid a busy condition.

## PMBus COMMAND SUMMARY

Table 1 lists  supported  PMBus  commands  and  manufacturer-specific  commands.  A  complete  description  of  the included PMBus commands is found in the PMBus Power System Management Protocol Specification. Floating point values listed in the default value column are half-precision IEEE floating point numbers. All commands from 0xC0 through 0xFF not listed in Table 1 are implicitly reserved by the manufacturer. Users must avoid blind writes within this range of commands to avoid undesired operation of the LT7176/LT7176-1. All commands from 0x00 through 0xBF not listed in Table 1 are implicitly not supported by the manufacturer. Attempting to access unsupported or reserved commands results in a CML command fault event.

The LT7176/LT7176-1 contains additional manufacturer-reserved commands not listed in Table 1 .  Reading these commands is harmless to the operation of the IC. However, the contents and meaning of these commands can change without notice.

Some of the unpublished commands are read-only and generate a communications, memory, and logic (CML) Bit 6 fault if written. Writing to commands not published in Table 1 is not permitted.

Table 1. Supported PMBus and MFR Commands 1

| COMMANDNAME 2   | COMMAND CODE   | DESCRIPTION                                                                      | TYPE      | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|-----------------|----------------|----------------------------------------------------------------------------------|-----------|---------------|--------|---------|-----------------|
| PAGE            | 0x00           | Provides integration with multipage PMBus devices.                               | R/W byte  | Register      |        | No      | 0x00            |
| OPERATION       | 0x01           | Operating modecontrol. On/off, margin high, and margin low.                      | R/W byte  | Register      |        | Yes     | 0x80            |
| ON_OFF_CONFIG   | 0x02           | RUNpin and PMBus bus on/off command configuration.                               | R/W byte  | Register      |        | Yes     | 0x1E            |
| CLEAR_FAULTS    | 0x03           | Clears any fault bits that have been set.                                        | Send byte |               |        |         |                 |
| PAGE_PLUS_WRITE | 0x05           | Writes a command directly to a specified page.                                   | W block   |               |        |         |                 |
| PAGE_PLUS_READ  | 0x06           | Reads a command directly from a specified page.                                  | Block R/W |               |        |         |                 |
| ZONE_CONFIG     | 0x07           | Assigns the current page to the specified zone number for ZONE_WRITE operations. | W word    | Register      |        | Yes     | 0xFEFE          |
| ZONE_ACTIVE     | 0x08           | Selects the active zone for ZONE_WRITE operations.                               | W word    | Register      |        | No      | 0xFEFE          |
| WRITE_PROTECT   | 0x10           | Level of protection provided by the device against accidental changes.           | R/W byte  | Register      |        | Yes     | 0x00            |
| STORE_USER_ALL  | 0x15           | Stores user operating memory to NVM. It can be written three times.              | Send byte |               |        |         |                 |

| COMMANDNAME 2        | COMMAND CODE   | DESCRIPTION                                                                 | TYPE      | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|----------------------|----------------|-----------------------------------------------------------------------------|-----------|---------------|--------|---------|-----------------|
| RESTORE_USER_ALL     | 0x16           | Restores user operating memory from NVM.                                    | Send byte |               |        |         |                 |
| CAPABILITY           | 0x19           | Summary of PMBus optional communication protocols supported by this device. | R byte    | Register      |        | No      | 0xD8            |
| QUERY                | 0x1A           | Asks if a givencommand is supported, and what data formats are supported.   | Block R/W | Register      |        | No      |                 |
| SMBALERT_MASK        | 0x1B           | Masks ALERT activity.                                                       | Block R/W | Register      |        | Yes     |                 |
| VOUT_MODE            | 0x20           | Output voltage format and exponent.                                         | R byte    | Register      |        | No      | 0x60            |
| VOUT_COMMAND         | 0x21           | Nominal output voltage set point.                                           | R/W word  | IEEE          | V      | Yes     | 0.3, 0x34CD     |
| VOUT_MAX             | 0x24           | Upper limit on the commanded output voltage.                                | R/W word  | IEEE          | V      | Yes     | 0.323, 0x352B   |
| VOUT_MARGIN_HIGH     | 0x25           | Margin high output voltage set point.                                       | R/W word  | IEEE          | V      | Yes     | 0.315, 0x350A   |
| VOUT_MARGIN_LOW      | 0x26           | Margin low output voltage set point.                                        | R/W word  | IEEE          | V      | Yes     | 0.3, 0x34CD     |
| VOUT_TRANSITION_RATE | 0x27           | Rates the output changes when V OUT is commanded to a new value.            | R/W word  | IEEE          | V/ms   | Yes     | 0.25, 0x3400    |
| FREQUENCY_SWITCH     | 0x33           | Switching frequency of the regulator.                                       | R/W word  | IEEE          | kHz    | Yes     | 1000.0, 0x63D0  |
| VIN_ON               | 0x35           | Input voltage at which the unit must start power conversion.                | R/W Word  | IEEE          | V      | Yes     | 1.4, 0x3D9A     |
| VIN_OFF              | 0x36           | Input voltage at which the unit must stop power conversion.                 | R/W word  | IEEE          | V      | Yes     | 1.35, 0x3D66    |
| IOUT_CAL_OFFSET      | 0x39           | Offset for READ_IOUT.                                                       | R/W word  | IEEE          | A      | Yes     | 0.32, 0x351F    |
| VOUT_OV_FAULT_LIMIT  | 0x40           | Output overvoltage (OV) fault limit.                                        | R/W word  | IEEE          | V      | Yes     | 0.33, 0x3548    |

| COMMANDNAME 2           | COMMAND CODE   | DESCRIPTION                                                                                          | TYPE     | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|-------------------------|----------------|------------------------------------------------------------------------------------------------------|----------|---------------|--------|---------|-----------------|
| VOUT_OV_FAULT_ RESPONSE | 0x41           | Action to be taken by the device when an output overvoltage fault is detected.                       | R/W byte | Register      |        | Yes     | 0xB8            |
| VOUT_OV_WARN_LIMIT      | 0x42           | Output overvoltage warning limit.                                                                    | R/W word | IEEE          | V      | Yes     | 0.323, 0x352B   |
| VOUT_UV_WARN_LIMIT      | 0x43           | Output undervoltage (UV) warning limit.                                                              | R/W word | IEEE          | V      | Yes     | 0.278, 0x3473   |
| VOUT_UV_FAULT_LIMIT     | 0x44           | Output undervoltage fault limit.                                                                     | R/W word | IEEE          | V      | Yes     | 0.27, 0x3452    |
| VOUT_UV_FAULT_ RESPONSE | 0x45           | Action to be taken by the device when an output undervoltage fault is detected.                      | R/W byte | Register      |        | Yes     | 0x00            |
| IOUT_OC_FAULT_ RESPONSE | 0x47           | Action to be taken by the device when an output overcurrent fault is detected.                       | R/W byte | Register      |        | Yes     | 0x00            |
| IOUT_OC_WARN_LIMIT      | 0x4A           | Output overcurrent warning limit.                                                                    | R/W word | IEEE          | A      | Yes     | 24.0, 0x4E00    |
| OT_FAULT_LIMIT          | 0x4F           | Internal overtemperature fault limit.                                                                | R/W word | IEEE          | °C     | Yes     | 160.0, 0x5900   |
| OT_FAULT_RESPONSE       | 0x50           | Action to be taken by the device when an internal overtemperature fault is detected.                 | R/W byte | Register      |        | Yes     | 0xC0            |
| OT_WARN_LIMIT           | 0x51           | Internal overtemperature warning limit.                                                              | R/W word | IEEE          | °C     | Yes     | 140.0, 0x5860   |
| VIN_OV_FAULT_ RESPONSE  | 0x56           | Action to be taken by the device when an input overvoltage fault is detected.                        | R/W byte | Register      |        | Yes     | 0xB8            |
| VIN_UV_WARN_LIMIT       | 0x58           | Input supply undervoltage warning limit.                                                             | R/W word | IEEE          | V      | Yes     | - 1.0, 0xBC00   |
| TON_DELAY               | 0x60           | Time from RUNand/or OPERATION onto the output rail turn-on.                                          | R/W word | IEEE          | ms     | Yes     | 0.0, 0x0000     |
| TON_RISE                | 0x61           | Time from when the output starts to rise until the output voltage reaches the V OUT commanded value. | R/W word | IEEE          | ms     | Yes     | 1.0, 0x3C00     |

| COMMANDNAME 2           | COMMAND CODE   | DESCRIPTION                                                                                               | TYPE     | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|-------------------------|----------------|-----------------------------------------------------------------------------------------------------------|----------|---------------|--------|---------|-----------------|
| TON_MAX_FAULT_LIMIT     | 0x62           | Maximum time from the start of TON_RISE for VOUT to cross the VOUT_UV_FAULT_LIMIT.                        | R/W word | IEEE          | ms     | Yes     | 5.0, 0x4500     |
| TON_MAX_FAULT_ RESPONSE | 0x63           | Action to be taken by the device when a TON_MAX_FAULT event is detected.                                  | R/W byte | Register      |        | Yes     | 0x00            |
| TOFF_DELAY              | 0x64           | Time from RUNand/or OPERATION off to the start of TOFF_FALL ramp.                                         | R/W word | IEEE          | ms     | Yes     | 0.0, 0x0000     |
| TOFF_FALL               | 0x65           | Time from when the output starts to fall until the output reaches zero volts.                             | R/W word | IEEE          | ms     | Yes     | 2.0, 0x4000     |
| TOFF_MAX_WARN_LIMIT     | 0x66           | Maximum allowed time, after TOFF_FALL is completed, for the unit to decay below MFR_DISCHARGE_THRESH OLD. | R/W word | IEEE          | ms     | Yes     | 0.0, 0x0000     |
| STATUS_BYTE             | 0x78           | One-byte summary of the unit fault condition.                                                             | R/W byte | Register      |        | No      |                 |
| STATUS_WORD             | 0x79           | Two-byte summary of the unit fault condition.                                                             | R/W word | Register      |        | No      |                 |
| STATUS_VOUT             | 0x7A           | Output voltage fault and warning status.                                                                  | R/W byte | Register      |        | No      |                 |
| STATUS_IOUT             | 0x7B           | Output current fault and warning status.                                                                  | R/W byte | Register      |        | No      |                 |
| STATUS_INPUT            | 0x7C           | Input supply fault and warning status.                                                                    | R/W byte | Register      |        | No      |                 |
| STATUS_TEMPERATURE      | 0x7D           | Internal temperature fault and warning status for READ_TEMPERATURE_1.                                     | R/W byte | Register      |        | No      |                 |
| STATUS_CML              | 0x7E           | Communication, memory fault, and warning status.                                                          | R/W byte | Register      |        | No      |                 |
| STATUS_MFR_SPECIFIC     | 0x80           | Manufacturer-specific fault and state information.                                                        | R/W byte | Register      |        | No      |                 |
| READ_VIN                | 0x88           | Measured input supply voltage.                                                                            | R word   | IEEE          | V      | No      |                 |
| READ_VOUT               | 0x8B           | Measured output voltage.                                                                                  | R word   | IEEE          | V      | No      |                 |

| COMMANDNAME 2                  | COMMAND CODE   | DESCRIPTION                                                                    | TYPE     | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE      |
|--------------------------------|----------------|--------------------------------------------------------------------------------|----------|---------------|--------|---------|--------------------|
| READ_IOUT                      | 0x8C           | Measured output current.                                                       | R word   | IEEE          | A      | No      |                    |
| READ_TEMPERATURE_1             | 0x8D           | Measured internal temperature.                                                 | R word   | IEEE          | °C     | No      |                    |
| READ_FREQUENCY                 | 0x95           | Measured pulse width modulation (PWM) switching frequency.                     | R word   | IEEE          |        | No      |                    |
| PMBUS_REVISION                 | 0x98           | PMBus revision supported by this device. Current revision is 1.3.              | R byte   | Register      |        | No      | 0x33               |
| MFR_ID                         | 0x99           | The manufacturer ID in ASCII.                                                  | R block  |               |        |         | ADI                |
| MFR_SERIAL                     | 0x9E           | Unique part serial number.                                                     | R block  |               |        |         |                    |
| IC_DEVICE_ID                   | 0xAD           | Identification of the IC in ASCII.                                             | R block  |               |        |         | LT7176 or LT7176-1 |
| IC_DEVICE_REV                  | 0xAE           | Revision of the IC.                                                            | R block  |               |        |         |                    |
| MFR_NVM_UNLOCK                 | 0xBD           | Contact the factory. Only used for MFR_NVM_DATA bulk programming.              |          |               |        |         |                    |
| MFR_NVM_USER_WRITES _REMAINING | 0xBE           | Number of STORE_USER_ALL writes remaining.                                     | R byte   | Register      |        | No      |                    |
| MFR_NVM_DATA                   | 0xBF           | Contact the factory. Used for bulk programming. Not needed for STORE_USER_ALL. |          |               |        |         |                    |
| MFR_USER_DATA_00               | 0xC9           | NVMwordavailable for the user.                                                 | R/W word | Register      |        | Yes     | 0x0000             |
| MFR_USER_DATA_01               | 0xCA           | NVMwordavailable for the user.                                                 | R/W word | Register      |        | Yes     | 0x0000             |
| MFR_READ_EXTVCC                | 0xCD           | Measured EXTV CC voltage, when enabled.                                        | R word   | IEEE          | V      | No      |                    |
| MFR_READ_ITH                   | 0xCE           | Measured I TH voltage, when enabled.                                           | R word   | IEEE          | V      | No      |                    |
| MFR_CHAN_CONFIG_ LT7176        | 0xD0           | Configuration bits that are channel-specific.                                  | R/W word | Register      |        | Yes     | 0x02C9             |
| MFR_CONFIG_ALL_ LT7176         | 0xD1           | General configuration bits.                                                    | R/W word | Register      |        | Yes     | 0x0000             |

| COMMANDNAME 2               | COMMAND CODE   | DESCRIPTION                                                                                     | TYPE      | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|-----------------------------|----------------|-------------------------------------------------------------------------------------------------|-----------|---------------|--------|---------|-----------------|
| MFR_FAULT_PROPAGATE _LT7176 | 0xD2           | The configuration that determines which faults are propagated to the FAULT pin.                 | R/W word  | Register      |        | Yes     | 0xA097          |
| MFR_READ_ASEL               | 0xD3           | Read the ASEL pin resistor value                                                                | R word    | R word        | kΩ     | No      |                 |
| MFR_PWM_MODE_ LT7176        | 0xD4           | Configuration forthePWM engine.                                                                 | R/W word  | Register      |        | Yes     | 0x0FDC          |
| MFR_FAULT_RESPONSE_ LT7176  | 0xD5           | Action to be taken when the FAULT pin is externally asserted low.                               | R/W byte  | Register      |        | Yes     | 0xC0            |
| MFR_IOUT_PEAK               | 0xD7           | Reports the maximum measured value of READ_IOUT since the last MFR_CLEAR_PEAKS.                 | R word    | IEEE          | A      | No      |                 |
| MFR_ADC_CONTROL_ LT7176     | 0xD8           | Configures the update rate for measurements taken by the analog-to-digital converter (ADC).     | R/W byte  | Register      |        | Yes     | 0x0E            |
| MFR_RETRY_DELAY             | 0xDB           | Retries interval during fault retry mode.                                                       | R/W word  | IEEE          | ms     | Yes     | 10.0, 0x4900    |
| MFR_VOUT_PEAK               | 0xDD           | Maximum measured value of READ_VOUT since last MFR_CLEAR_PEAKS.                                 | R/W word  | IEEE          | V      | No      |                 |
| MFR_VIN_PEAK                | 0xDE           | Maximum measured value of READ_VIN since last MFR_CLEAR_PEAKS.                                  | R/W word  | IEEE          | V      | No      |                 |
| MFR_TEMPERATURE_1_ PEAK     | 0xDF           | Maximum measured value of internal temperature (READ_TEMPERATURE_1) since last MFR_CLEAR_PEAKS. | R/W word  | IEEE          | °C     | No      |                 |
| MFR_READ_PWM_CFG            | 0xE0           | MeasuredPWM_CFG resistor value.                                                                 | R word    | IEEE          | kΩ     | No      |                 |
| MFR_READ_VOUT_CFG           | 0xE1           | Measured VOUT_CFG resistor value.                                                               | R word    | IEEE          | kΩ     | No      |                 |
| MFR_CLEAR_PEAKS             | 0xE3           | Clears all peak values.                                                                         | Send byte |               |        |         |                 |
| MFR_DISCHARGE_ THRESHOLD    | 0xE4           | The output voltage used to determine output has decayed sufficiently to reenable the channel.   | R/W word  | IEEE          |        | Yes     | 0.2, 0x3266     |
| MFR_PADS_LT7176             | 0xE5           | Digital status of the I/O pads.                                                                 | R word    | Register      |        | No      |                 |

| COMMANDNAME 2           | COMMAND CODE   | DESCRIPTION                                                                               | TYPE      | DATA FORMAT   | UNIT   | NVM 3   | DEFAULT VALUE   |
|-------------------------|----------------|-------------------------------------------------------------------------------------------|-----------|---------------|--------|---------|-----------------|
| MFR_ADDRESS             | 0xE6           | Sets the 7-bit I 2 C address byte.                                                        | R/W word  | Register      |        | Yes     | 0x4F            |
| MFR_SPECIAL_ID          | 0xE7           | ID code used by the manufacturer.                                                         | R word    | Register      |        | No      | 0x1C1D          |
| MFR_COMMON              | 0xEF           | Manufacturer status bits that are commonacross multiple Analog Devices chips.             | R byte    | Register      |        | No      |                 |
| MFR_COMPARE_ USER_ALL   | 0xF0           | Compares current command contents with NVM.                                               | Send byte |               |        |         |                 |
| MFR_CHANNEL_STATE       | 0xF1           | Returns the state of the channel.                                                         | R byte    | Register      |        | No      |                 |
| MFR_PGOOD_DELAY         | 0xF2           | The time output voltage must be between UV and OV before the PGOODpin transitions high.   | R/W word  | IEEE          | ms     | Yes     | 1.0, 0x3C00     |
| MFR_NOT_PGOOD_ DELAY    | 0xF3           | The time output voltage must be below UV or above OV before the PGOODpin transitions low. | R/W word  | IEEE          | ms     | Yes     | 0.1, 0x2E66     |
| MFR_PWM_PHASE_ LT7176   | 0xF5           | Sets PWMphase.                                                                            | R/W byte  | Register      |        | Yes     | 0x00            |
| MFR_SYNC_CONFIG_ LT7176 | 0xF6           | SYNC pin input/output configuration.                                                      | R/W byte  | Register      |        | Yes     | 0x01            |
| MFR_PIN_CONFIG_ STATUS  | 0xF7           | Pin configuration fault status.                                                           | R byte    | Register      |        | No      |                 |
| MFR_RAIL_ADDRESS        | 0xFA           | Commonaddress to adjust commonparameters.                                                 | R/W byte  | Register      |        | Yes     | 0x80            |
| MFR_DISABLE_OUTPUT      | 0xFB           | Disables regulator outputs until reset.                                                   | R/W byte  | Register      |        | No      | 0x00            |
| MFR_NVM_USER_WP         | 0xFC           | Disables commands that write user NVM.                                                    | R/W byte  | Register      |        | Yes     | 0x00            |
| MFR_RESET               | 0xFD           | Commanded a reset without requiring a power- down.                                        | Send byte |               |        |         |                 |

Table 2. Abbreviations of Supported Data Formats 1

| PMBus TERMINOLOGY   | PMBus TERMINOLOGY                       | PMBus SPECIFICATION REFERENCE   | DEFINITION                                                                                                                            | EXAMPLE                                                     |
|---------------------|-----------------------------------------|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Register            |                                         |                                 | Per bit meaning is defined in eachcommand description.                                                                                | PMBus STATUS_BYTE command                                   |
| IEEE                | IEEE 754 half- precision floating point | Rev 1.3.1 Part II 8.4.4         | Floating point 16-bit data: for normal values, value = (-1) s ×2 N-15 × (1+ M 1024 ) , where S = Bit[15], N=Bits[14:10], M=Bits[9:0]. | Bits[15:0] = 0x4580 = (-1) 0 ×2 17-15 ×(1+ 384 1024 ) = 5.5 |

## PMBus COMMAND DETAILS

## Addressing and Write Protection

Table 3. Addressing and Write Protection Commands

| COMMANDNAME      | CODE   | DESCRIPTION                                                                     | TYPE              | NVM   | DEFAULT VALUE 1   |
|------------------|--------|---------------------------------------------------------------------------------|-------------------|-------|-------------------|
| PAGE             | 0x00   | Channel (page) selected for any paged command.                                  | R/W byte          | No    | 0x00              |
| PAGE_PLUS_WRITE  | 0x05   | Writes a commanddirectly to a specified page.                                   | Wblock            | No    | N/A               |
| PAGE_PLUS_READ   | 0x06   | Reads a commanddirectly from a specified page.                                  | Block R/W process | No    | N/A               |
| ZONE_CONFIG      | 0x07   | Specifies the zone number for the selected page.                                | R/W word          | Yes   | 0xFEFE            |
| ZONE_ACTIVE      | 0x08   | Sets active zone number.                                                        | R/W word          | No    | 0xFEFE            |
| WRITE_PROTECT    | 0x10   | Protects the device from unintended PMBus modifications.                        | R/W byte          | Yes   | 0x00              |
| MFR_ADDRESS      | 0xE6   | Specifies right-justified 7-bit device address.                                 | R/W byte          | Yes   | 0x4F              |
| MFR_RAIL_ADDRESS | 0xFA   | Specifies right-justified 7-bit address for channels to be controlled together. | R/W byte          | Yes   | 0x80              |

## PAGE

The PAGE command provides the ability to configure, control, and monitor multiple channels through only one physical address, either the device address or global address 0x5B (7-bit address).

The LT7176/LT7176-1 has only one channel, and the PAGE command can only be 0x00 or 0xFF. Both values have the same effect. PAGE 0xFF is used to select all channels in multichannel devices. The PAGE command is included only for compatibility with other PMBus devices.

## PAGE\_PLUS\_WRITE

The PAGE\_PLUS\_WRITE command provides a way to select the page within the LT7176/LT7176-1, sends a command, and then sends the data for the command, all in one communication packet. Commands allowed by the present write-protection level can be sent with PAGE\_PLUS\_WRITE.

The value stored in the PAGE command is not affected by PAGE\_PLUS\_WRITE. If PAGE\_PLUS\_WRITE is used to send a nonpaged command, the page number byte is ignored.

Note that PAGE\_PLUS commands cannot be nested. A PAGE\_PLUS command cannot be used to read or write another PAGE\_PLUS command. If this is attempted, the LT7176/LT7176-1 refuses to acknowledge the entire PAGE\_PLUS packet and issues a CML fault for invalid/unsupported data.

The PAGE\_PLUS\_WRITE command cannot be used to write the PAGE command.

If the PAGE\_PLUS\_WRITE command is sent during a ZONE\_WRITE, the page field is used as the effective zone. The page field overrides the write zone of ZONE\_ACTIVE for this PAGE\_PLUS\_WRITE only.

The LT7176/LT7176-1 has only one page, and the PAGE\_PLUS\_WRITE command is included only for compatibility with other PMBus devices.

## PAGE\_PLUS\_READ

The  PAGE\_PLUS\_READ  command  provides  the  ability  to  select  the  page  within  the  LT7176/LT7176-1,  sends  a command, and then reads the data returned by the command, all in one communication packet.

The value stored in the PAGE command is not affected by PAGE\_PLUS\_READ. If PAGE\_PLUS\_READ is used to access data from a nonpaged command, the page number byte is ignored.

Note that PAGE\_PLUS commands cannot be nested. A PAGE\_PLUS command cannot be used to read or write another PAGE\_PLUS command. If this is attempted, the LT7176/LT7176-1 refuses to acknowledge the entire PAGE\_PLUS packet and issues a CML fault for invalid/unsupported data.

The PAGE\_PLUS\_READ command cannot be used to read the PAGE command.

The LT7176/LT7176-1 has only one page, and the PAGE\_PLUS\_READ command is included only for compatibility with other PMBus devices.

## ZONE\_CONFIG

The  ZONE\_CONFIG  command  is  used  to  assign  the  currently  selected  channel  to  a  specific  zone  number  for ZONE\_WRITE operations. Zone configuration only needs to be performed once, but zone numbers can be changed at any time.

The zone of the channel can be assigned to any zone number between 0x00 and 0x7F. It can also be set to 0xFE, which means no zone. Any channel programmed to a no zone ignores ZONE\_WRITE operations.

The ZONE\_CONFIG command uses the SMBus word write, and word read protocols.

Table 4. ZONE\_CONFIG Bits and Meaning

| BITS   | MEANING       |
|--------|---------------|
| [15:8] | Must be 0xFE  |
| [7:0]  | Assigned zone |

## ZONE\_ACTIVE

The ZONE\_ACTIVE command sets the active zone for ZONE\_WRITE operations. When ZONE\_WRITE is sent by the bus controller, the active zone controls which channels are affected by that write.

The active zone can be set to any zone number between 0x00 and 0x7F. The active zone can also be set to 0xFF, which means all zones. If a ZONE\_WRITE is sent while the active zone is set to all zones, any channel not programmed to no zone via ZONE\_CONFIG is affected by that write.

The ZONE\_ACTIVE command must be sent using the ZONE\_WRITE address (0x37) as a ZONE\_WRITE operation. If the ZONE\_ACTIVE  command  is  sent  to  the  global,  device,  or  rail  addresses,  the  invalid  command  bit  is  set  in STATUS\_CML.

Table 5. ZONE\_ACTIVE Bits and Meaning

| BITS   | MEANING      |
|--------|--------------|
| [15:8] | Must be 0xFE |
| [7:0]  | Active zone  |

## WRITE\_PROTECT

The WRITE\_PROTECT command is used to control writing to the LT7176/LT7176-1. When WRITE\_PROTECT is set to 0x00, writes to all commands are enabled.

The  PAGE\_PLUS\_WRITE  command  can  be  used  to  write  any  command  that  is  not  write  protected.  The PAGE\_PLUS\_READ command can be used to read any command.

Table 6. WRITE\_PROTECT Byte and Meaning

| BITS   | MEANING                                                                                                                                                                                                                                                                       |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x80   | Disable all writes except to the WRITE_PROTECT, PAGE, MFR_NVM_UNLOCK, and STORE_USER_ALL commands.                                                                                                                                                                            |
| 0x40   | Disable all writes except to the WRITE_PROTECT, PAGE, MFR_NVM_UNLOCK, MFR_CLEAR_PEAKS, STORE_USER_ALL, OPERATION, and CLEAR_FAULTS commands. Individual fault bits can be cleared by writing a 1 to the respective bits in the STATUS registers.                              |
| 0x20   | Disable all writes except to the WRITE_PROTECT, OPERATION, MFR_NVM_UNLOCK, MFR_CLEAR_PEAKS, CLEAR_FAULTS, PAGE, ON_OFF_CONFIG, VOUT_COMMAND, and STORE_USER_ALL commands. Individual fault bits can be cleared by writing a 1 to the respective bits in the STATUS registers. |
| 0x10   | Reserved, must be 0.                                                                                                                                                                                                                                                          |
| 0x08   | Reserved, must be 0.                                                                                                                                                                                                                                                          |
| 0x04   | Reserved, must be 0.                                                                                                                                                                                                                                                          |
| 0x02   | Reserved, must be 0.                                                                                                                                                                                                                                                          |
| 0x01   | Reserved, must be 0.                                                                                                                                                                                                                                                          |

## MFR\_Address

The MFR\_ADDRESS command byte and the ASEL pin set the seven bits of the PMBus device address.

Setting this command to a value of 0x80 disables device addressing. The global device addresses, Address 0x5A and Address 0x5B, cannot be deactivated.

If  the  ASEL  pin  is  floating  or  connected  to  V DD18 ,  the  device  will  use  the  full  MFR\_ADDRESS  value.  If  a  resistor  is connected to the ASEL pin according to the Table 7 . The four least significant bits (LSBs) of the device address will be determined by the ASEL resistor value.

Reading MFR\_ADDRESS always returns the value loaded from NVM or written via PMBus write. The value read from MFR\_ADDRESS is not affected by the ASEL pin.

LT7176/LT7176-1 does not ignore ASEL, even when bit 6 of MFR\_CONFIG\_ALL\_LT7176 is set to ignore the other resistor configuration pins.

The three MSBs 6:4 of the device address are always determined by bits 6:4 of MFR\_ADDRESS.

Table 7. LT7176/LT7176-1 Address Configuration Using ASEL Resistor

| ASEL RESISTOR VALUE (±1%)   | VALUE OF PMBusDEVICE ADDRESS LSBs 3:0   |
|-----------------------------|-----------------------------------------|
| Floating or V DD18          | NVMvalue of MFR_ADDRESS                 |
| 124kΩ                       | 0xF                                     |
| 107kΩ                       | 0xE                                     |

| ASEL RESISTOR VALUE (±1%)   | VALUE OF PMBusDEVICE ADDRESS LSBs 3:0   |
|-----------------------------|-----------------------------------------|
| 93.1kΩ                      | 0xD                                     |
| 80.6kΩ                      | 0xC                                     |
| 69.8kΩ                      | 0xB                                     |
| 60.4kΩ                      | 0xA                                     |
| 51.1kΩ                      | 0x9                                     |
| 43.2kΩ                      | 0x8                                     |
| 36.5kΩ                      | 0x7                                     |
| 30.9kΩ                      | 0x6                                     |
| 25.5kΩ                      | 0x5                                     |
| 21kΩ                        | 0x4                                     |
| 16.5kΩ                      | 0x3                                     |
| 11.8kΩ                      | 0x2                                     |
| 6.65kΩ                      | 0x1                                     |
| 0 (SGND)                    | 0x0                                     |

Table 8. Illegal Values for MFR\_ADDRESS

| ADDRESS   | OTHERUSES               |
|-----------|-------------------------|
| 0x0C      | ARA protocol address    |
| 0x37      | Zone write              |
| 0x5A      | Global all rail address |
| 0x5B      | Global address          |

Attempting to set the MFR\_ADDRESS command to illegal values sets a CML invalid data fault.

After changing the device address, leave at least 10µs for the new address to take effect before starting a new PMBus transaction.

The LT7176/LT7176-1 always responds to the global addresses, Address 0x5A and Address 0x5B. Writes to Address 0x5A affect all pages, and reads target Page 0, as if PAGE = 0xFF.

## MFR\_RAIL\_Address

The MFR\_RAIL\_ADDRESS command enables direct device address access to the currently selected channel. Writing this command sets, the rail address for the currently selected channel. The value of this command is common to all devices attached to a single power supply rail.

Setting this command to a value of 0x80 disables rail device addressing for the selected channel.

Attempting to set MFR\_RAIL\_ADDRESS to an illegal address, as defined in the MFR\_Address section, sets a CML invalid data fault.

Writing the PAGE\_PLUS\_READ or PAGE\_PLUS\_WRITE command to the rail address sets a CML invalid command fault. Reading from the rail address results in a CML other fault.

After changing the rail address, leave at least 10µs for the new address to take effect before starting a new PMBus transaction.

## General Configuration

## Table 9. General Configuration Commands

| COMMANDNAME            | CODE   | DESCRIPTION                                   | TYPE     | NVM   | DEFAULT VALUE   |
|------------------------|--------|-----------------------------------------------|----------|-------|-----------------|
| MFR_CHAN_CONFIG_LT7176 | 0xD0   | Configuration bits that are channel specific. | R/W word | Yes   | 0x02C9          |
| MFR_CONFIG_ALL_LT7176  | 0xD1   | Configuration bitscommonto all channels.      | R/W word | Yes   | 0x0000          |

## MFR\_CHAN\_CONFIG\_LT7176

The MFR\_CHAN\_CONFIG\_LT7176 command sets various per channel configuration bits.

## Table 10. MFR\_CHAN\_CONFIG\_LT7176 Bits

| BITS    | DEFAULT   | MEANING                                                                                                                                                                                                                                                                                                | MEANING                                                                                                                                                                                                                                                                                                | MEANING                                                                                                                                                                                                                                                                                                |
|---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [15:11] | 00000     | Reserved.                                                                                                                                                                                                                                                                                              | Reserved.                                                                                                                                                                                                                                                                                              | Reserved.                                                                                                                                                                                                                                                                                              |
| 10      | 0         | Applies only to the LT7176-1 0 = Both output Phase 0 and Phase 1 are enabled when V OUT is enabled 1 = Follower phase (Phase 1) is disabled                                                                                                                                                            | Applies only to the LT7176-1 0 = Both output Phase 0 and Phase 1 are enabled when V OUT is enabled 1 = Follower phase (Phase 1) is disabled                                                                                                                                                            | Applies only to the LT7176-1 0 = Both output Phase 0 and Phase 1 are enabled when V OUT is enabled 1 = Follower phase (Phase 1) is disabled                                                                                                                                                            |
| 9       | 1         | 0 = Top switch drive strength normal. 1 = Top switch drive strength high.                                                                                                                                                                                                                              | 0 = Top switch drive strength normal. 1 = Top switch drive strength high.                                                                                                                                                                                                                              | 0 = Top switch drive strength normal. 1 = Top switch drive strength high.                                                                                                                                                                                                                              |
| 8       | 0         | 0 = Default single-phase application or polyphase leader operation. 1 = Polyphase follower mode. All but one channel in polyphase applications should be set to follower mode. Internal compensation cannot be used in polyphase operation. The channel operates in forced continuous conduction mode. | 0 = Default single-phase application or polyphase leader operation. 1 = Polyphase follower mode. All but one channel in polyphase applications should be set to follower mode. Internal compensation cannot be used in polyphase operation. The channel operates in forced continuous conduction mode. | 0 = Default single-phase application or polyphase leader operation. 1 = Polyphase follower mode. All but one channel in polyphase applications should be set to follower mode. Internal compensation cannot be used in polyphase operation. The channel operates in forced continuous conduction mode. |
| 7       | 1         | 0 = Device will not pull SHARE_CLKdowndue to V IN voltage level. 1 = Enable SHARE_CLK pull-down until V IN exceeds VIN_ON, or if V IN falls below VIN_OFF.                                                                                                                                             | 0 = Device will not pull SHARE_CLKdowndue to V IN voltage level. 1 = Enable SHARE_CLK pull-down until V IN exceeds VIN_ON, or if V IN falls below VIN_OFF.                                                                                                                                             | 0 = Device will not pull SHARE_CLKdowndue to V IN voltage level. 1 = Enable SHARE_CLK pull-down until V IN exceeds VIN_ON, or if V IN falls below VIN_OFF.                                                                                                                                             |
| 6       | 1         | 0 = 250Ω output V SENSEP pull-down is disabled. 1 = 250Ω output V SENSEP pull-down is enabled when off and during TOFF_FALL.                                                                                                                                                                           | 0 = 250Ω output V SENSEP pull-down is disabled. 1 = 250Ω output V SENSEP pull-down is enabled when off and during TOFF_FALL.                                                                                                                                                                           | 0 = 250Ω output V SENSEP pull-down is disabled. 1 = 250Ω output V SENSEP pull-down is enabled when off and during TOFF_FALL.                                                                                                                                                                           |
| [5:4]   | 00        | Reserved.                                                                                                                                                                                                                                                                                              | Reserved.                                                                                                                                                                                                                                                                                              | Reserved.                                                                                                                                                                                                                                                                                              |
| 3       | 1         | 0 = Channel output remains active if SHARE_CLK is held low. 1 = Channel output is disabled if SHARE_CLK is held low.                                                                                                                                                                                   | 0 = Channel output remains active if SHARE_CLK is held low. 1 = Channel output is disabled if SHARE_CLK is held low.                                                                                                                                                                                   | 0 = Channel output remains active if SHARE_CLK is held low. 1 = Channel output is disabled if SHARE_CLK is held low.                                                                                                                                                                                   |
| [2:1] 1 | 0         | Output voltage range.                                                                                                                                                                                                                                                                                  | Output voltage range.                                                                                                                                                                                                                                                                                  | Output voltage range.                                                                                                                                                                                                                                                                                  |
|         |           | VALUE                                                                                                                                                                                                                                                                                                  | MAXIMUMOUTPUT VOLTAGE                                                                                                                                                                                                                                                                                  | MINIMUMRECOMMENDEDOUTPUT VOLTAGE 2                                                                                                                                                                                                                                                                     |
|         |           | 0 1 2                                                                                                                                                                                                                                                                                                  | 1.375V 2.75V 3.4V                                                                                                                                                                                                                                                                                      | 0.3V 0.8V 1.6V                                                                                                                                                                                                                                                                                         |
|         |           | 3                                                                                                                                                                                                                                                                                                      | Invalid; writing this causes CMLinvalid data                                                                                                                                                                                                                                                           | Invalid; writing this causes CMLinvalid data                                                                                                                                                                                                                                                           |

|   BITS |   DEFAULT | MEANING                                                                                                                               |
|--------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|
|      0 |         1 | 0 = V OUT must be below MFR_DISCHARGE_THRESHOLDbefore the output can be enabled. 1 = The output can be enabled, regardless of V OUT . |

## MFR\_CONFIG\_ALL\_LT7176

The MFR\_CONFIG\_ALL\_LT7176 command sets various global configuration bits.

## Table 11. MFR\_CONFIG\_ALL\_LT7176 Bits

| BITS   |   DEFAULT | MEANING                                                                                                                                                                                                                      |
|--------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [15:7] | 000000000 | Reserved.                                                                                                                                                                                                                    |
| 6      |         0 | 0 = Configuration resistors are measured and used to configure the LT7176/LT7176-1 during initialization. 1 = CFG pin configuration resistors are ignored on VOUT_CFG and PWM_CFGpins.                                       |
| [5:3]  |       000 | Reserved.                                                                                                                                                                                                                    |
| 2      |         0 | 0 = Valid PEC not required. 1 = Valid PEC required.                                                                                                                                                                          |
| 1      |         0 | 0 = Disable PMBus clock stretching. If the LT7176/LT7176-1 are too busy to process a command, the devices refuse to acknowledge the command and set Bit 7 in STATUS_BYTE and STATUS_WORD. 1 = Enable PMBus clock stretching. |
| 0      |         0 | Reserved.                                                                                                                                                                                                                    |

## On, Off, and Margin

Table 12. On, Off, and Margin Commands 1

| COMMANDNAME   | CODE   | DESCRIPTION                                                 | TYPE      | NVM   | DEFAULT VALUE   |
|---------------|--------|-------------------------------------------------------------|-----------|-------|-----------------|
| OPERATION     | 0x01   | Operating modecontrol. On/off, margin high, and margin low. | R/W byte  | Yes   | 0x80            |
| ON_OFF_CONFIG | 0x02   | RUNpin and PMBus OPERATION command configuration.           | R/W byte  | Yes   | 0x1E            |
| MFR_RESET     | 0xFD   | Commandedreset.                                             | Send byte |       |                 |

## Operation

The OPERATION command is used to turn the channel on or off in conjunction with the RUN pin, according to the configuration  defined  in  ON\_OFF\_CONFIG.  It  is  also  used  to  set  the  output  voltage  to  VOUT\_MARGIN\_HIGH  or VOUT\_MARGIN\_LOW.

Disabling and then re-enabling the channel causes all latched faults and status bits to be cleared.

Table 13 lists the OPERATION values supported by the LT7176/LT7176-1.

Table 13. Operation Values

| FUNCTION             | VALUE   |
|----------------------|---------|
| Turn off immediately | 0×00    |
| Turn on              | 0×80    |
| Margin low           | 0×98    |
| Margin high          | 0×AB    |
| Sequence off         | 0×40    |

## ON\_OFF\_CONFIG

The ON\_OFF\_CONFIG command configures the combination of the RUN pin input and serial bus commands required to turn the channel on and off.

The only bits allowed to be changed are as follows:

-  Bit 3: when high, the channel only provides output power if the on/off portion of the OPERATION is set.
-  Bit 2: when high, the channel only provides output power if the RUN pin is high.
-  Bit 0: when high, the channel performs an immediate shutdown when the RUN pin is deasserted. Bit 0 only has an effect when Bit 2 is also set.

Bit 4 and Bit 1 must both be 1. Setting Bit 4 or Bit 1 to 0 generates a CML fault.

If Bit 2 and Bit 3 of the ON\_OFF\_CONFIG command are both set to 1 (which is the factory default), the channel only turns on if the RUN pin is high and the OPERATION command is set to enable (on, margin low, or margin high).

## MFR\_RESET

The MFR\_RESET command causes the LT7176/LT7176-1 to reset.

Reading the MFR\_RESET command also causes the LT7176/LT7176-1 to reset.

## PWM Configuration

## Table 14. PWM Configuration Commands

| COMMANDNAME            | CODE   | DESCRIPTION                         | TYPE     | UNIT 1   | NVM   | DEFAULT VALUE   |
|------------------------|--------|-------------------------------------|----------|----------|-------|-----------------|
| FREQUENCY_SWITCH       | 0x33   | Controller switching frequency.     | R/W word | kHz      | Yes   | 1000.0          |
| MFR_PWM_MODE_LT7176    | 0xD4   | PWMconfiguration, includingPWMmode. | R/W word | N/A      | Yes   | 0x0FDC          |
| MFR_PWM_PHASE_LT7176   | 0xF5   | Sets PWMphase.                      | R/W word | N/A      | Yes   | 0x00            |
| MFR_SYNC_CONFIG_LT7176 | 0xF6   | SYNC pin configuration.             | R/W byte | N/A      | Yes   | 0x01            |

## FREQUENCY\_SWITCH

The FREQUENCY\_SWITCH command selects the internal oscillator frequency in 50kHz steps. The valid range is from 400kHz to 3MHz. If the commanded frequency is not a multiple of 50kHz, the nearest multiple is used.

Regardless  of  the  value  of  FREQUENCY\_SWITCH,  if  an  external  clock  is  present  on  the  SYNC  pin,  the  LT7176/ LT7176-1 attempts to synchronize the PWM to the external clock, unless Bit 1 or Bit 0 in the MFR\_SYNC\_CONFIG\_LT7176  command  is  set.  If  an  external  clock  is  to  be  used  for  synchronization,  it  is recommended to program FREQUENCY\_SWITCH to the same frequency as the external clock.

The FREQUENCY\_SWITCH command has two data bytes encoded in half-precision floating point format. When Bit 6 of the MFR\_CONFIG\_ALL\_LT7176 command is 0, a configuration resistor on the PWM\_CFG pin can override stored NVM values for the FREQUENCY\_SWITCH command at power-up.

## MFR\_PWM\_MODE\_LT7176 Table 15. MFR\_PWM\_MODE\_LT7176 Bits

| BITS    | DEFAULT   | MEANING                                                                                                                                                                                                            | MEANING                                                                                                                                                                                                            | MEANING                                                                                                                                                                                                            |
|---------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [15:11] | 0b00001   | Error Amplifier Transconductance (g MEA ), 0.3V to 1.375V V OUT range: g MEA = (Value + 1) × 150µS, 0.8V to 2.75V V OUT range: g MEA = (Value + 1) × 75µS, 1.6V to 3.4V V OUT range: g MEA = (Value + 1) × 37.5µS. | Error Amplifier Transconductance (g MEA ), 0.3V to 1.375V V OUT range: g MEA = (Value + 1) × 150µS, 0.8V to 2.75V V OUT range: g MEA = (Value + 1) × 75µS, 1.6V to 3.4V V OUT range: g MEA = (Value + 1) × 37.5µS. | Error Amplifier Transconductance (g MEA ), 0.3V to 1.375V V OUT range: g MEA = (Value + 1) × 150µS, 0.8V to 2.75V V OUT range: g MEA = (Value + 1) × 75µS, 1.6V to 3.4V V OUT range: g MEA = (Value + 1) × 37.5µS. |
| [10:9]  | 0b11      | Current Limit Selection 1                                                                                                                                                                                          | Current Limit Selection 1                                                                                                                                                                                          | Current Limit Selection 1                                                                                                                                                                                          |
|         |           | Value                                                                                                                                                                                                              | Positive Valley Current Limit, I LIM-POS (Typical)                                                                                                                                                                 | Negative Valley Current Limit, I LIM-NEG (Typical)                                                                                                                                                                 |
|         |           | 3                                                                                                                                                                                                                  | +24A                                                                                                                                                                                                               | - 13.4A                                                                                                                                                                                                            |
|         |           | 2                                                                                                                                                                                                                  | +19A                                                                                                                                                                                                               | - 11.4A                                                                                                                                                                                                            |
|         |           | 1                                                                                                                                                                                                                  | +14A                                                                                                                                                                                                               | - 8.2A                                                                                                                                                                                                             |
|         |           | 0                                                                                                                                                                                                                  | +10A                                                                                                                                                                                                               | - 6.8A                                                                                                                                                                                                             |
| [8:6]   | 0b111     | Internal Compensation Capacitor Value, C ITH                                                                                                                                                                       | Internal Compensation Capacitor Value, C ITH                                                                                                                                                                       | Internal Compensation Capacitor Value, C ITH                                                                                                                                                                       |
|         |           | Value                                                                                                                                                                                                              | Value                                                                                                                                                                                                              | C ITH Capacitor Value                                                                                                                                                                                              |
|         |           | 7                                                                                                                                                                                                                  | 7                                                                                                                                                                                                                  | 320pF                                                                                                                                                                                                              |
|         |           | 6                                                                                                                                                                                                                  | 6                                                                                                                                                                                                                  | 280pF                                                                                                                                                                                                              |
|         |           | 5                                                                                                                                                                                                                  | 5                                                                                                                                                                                                                  | 240pF                                                                                                                                                                                                              |
|         |           | 4                                                                                                                                                                                                                  | 4                                                                                                                                                                                                                  | 200pF                                                                                                                                                                                                              |
|         |           | 3                                                                                                                                                                                                                  | 3                                                                                                                                                                                                                  | 160pF                                                                                                                                                                                                              |
|         |           | 2                                                                                                                                                                                                                  | 2                                                                                                                                                                                                                  | 120pF                                                                                                                                                                                                              |
|         |           | 1                                                                                                                                                                                                                  | 1                                                                                                                                                                                                                  | 80pF                                                                                                                                                                                                               |
|         |           | 0                                                                                                                                                                                                                  | 0                                                                                                                                                                                                                  | 40pF                                                                                                                                                                                                               |

| BITS   | DEFAULT   | MEANING                                                                                                                                                                    | MEANING                                                                                                                                                                    |
|--------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [5:3]  | 0b011     | Internal Compensation Lead Resistor Value, R ITH                                                                                                                           | Internal Compensation Lead Resistor Value, R ITH                                                                                                                           |
| [5:3]  | 0b011     | Value                                                                                                                                                                      | R ITH Resistor Value                                                                                                                                                       |
| [5:3]  | 0b011     | 7                                                                                                                                                                          | 60kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 6                                                                                                                                                                          | 42kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 5                                                                                                                                                                          | 29kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 4                                                                                                                                                                          | 20kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 3                                                                                                                                                                          | 14kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 2                                                                                                                                                                          | 10kΩ                                                                                                                                                                       |
| [5:3]  | 0b011     | 1                                                                                                                                                                          | 7kΩ                                                                                                                                                                        |
| [5:3]  | 0b011     | 0                                                                                                                                                                          | 5kΩ                                                                                                                                                                        |
| 2      | 1         | 0 = Bit 0 is used during TOFF_FALL. 1 = Use forced continuous modeduring TOFF_FALL regardless of the value of Bit 0.                                                       | 0 = Bit 0 is used during TOFF_FALL. 1 = Use forced continuous modeduring TOFF_FALL regardless of the value of Bit 0.                                                       |
| 1      | 0         | Forces the connection of the internal compensation network to I TH , even if there is external compensation.                                                               | Forces the connection of the internal compensation network to I TH , even if there is external compensation.                                                               |
| 0      | 0         | 0 = Channel operates in forced continuous conductionmodewhenthe output is in regulation at the commandedoutput voltage and during TOFF_FALL 1 = Pulse skipmode is enabled. | 0 = Channel operates in forced continuous conductionmodewhenthe output is in regulation at the commandedoutput voltage and during TOFF_FALL 1 = Pulse skipmode is enabled. |

When Bit 6 of the MFR\_CONFIG\_ALL\_LT7176 command is 0, configuration resistors, if populated, override stored NVM values for the MFR\_PWM\_MODE\_LT7176 command at power-up.

## MFR\_PWM\_PHASE\_LT7176

The MFR\_PWM\_PHASE\_LT7176 command sets the channel PWM phase.

## Table 16. MFR\_PWM\_PHASE\_LT7176 Value and Phase

| VALUE   |   PHASE ( ° ) |
|---------|---------------|
| 0×00    |             0 |
| 0×01    |            15 |
| 0×02    |            30 |
| 0×03    |            45 |
| 0×04    |            60 |
| 0×05    |            75 |
| 0×06    |            90 |
| 0×07    |           105 |

| VALUE   |   PHASE ( ° ) |
|---------|---------------|
| 0×08    |           120 |
| 0×09    |           135 |
| 0×0a    |           150 |
| 0×0b    |           165 |
| 0×0c    |           180 |
| 0×0d    |           195 |
| 0×0e    |           210 |
| 0×0f    |           225 |
| 0×10    |           240 |
| 0×11    |           255 |
| 0×12    |           270 |
| 0×13    |           285 |
| 0×14    |           300 |
| 0×15    |           315 |
| 0×16    |           330 |
| 0×17    |           345 |

When Bit 6 of the MFR\_CONFIG\_ALL\_LT7176 command is 0, configuration resistors, if populated, override stored NVM values for the MFR\_PWM\_PHASE\_LT7176 command at power-up.

## MFR\_SYNC\_CONFIG\_LT7176 Table 17. MFR\_SYNC\_CONFIG\_LT7176 Bits

| BITS   |   DEFAULT | MEANING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|--------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:2]  |    000000 | Must be 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1      |         0 | 0 = SYNC clock input is used if applied. 1 = Ignore SYNC clock input. Note that the SYNC clock input is always ignored if the SYNC output is enabled (Bit 0 high). Note that even if Bit 1 is set, anexternalclockonSYNCmaynot be ignored during reset. If an external clock is applied to SYNC at POR and the configuration resistor function has not been disabled (that is, Bit 6 of the MFR_CONFIG_ALL_LT7176 command is set to its factory default value of 0 in NVM), the LT7176/LT7176-1 configure internal settings as described in the Theory of Operation section in the LT7176 data sheet. |
| 0      |         1 | 0 = Disable SYNC output clock. 1 = Enable SYNC output clock (after V IN has risen above VIN_ON for the first time after power is applied).                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  the MFR\_SYNC\_CONFIG\_LT7176 command at power-up.

## Input Voltage and Limits

Table 18. Input Voltage and Limits Commands

| COMMANDNAME       | CODE   | DESCRIPTION                                                 | TYPE     | UNIT   | NVM   | DEFAULT VALUE   |
|-------------------|--------|-------------------------------------------------------------|----------|--------|-------|-----------------|
| VIN_ON            | 0x35   | Input voltage at which the channel starts power conversion. | R/W word | V      | Yes   | 1.4             |
| VIN_OFF           | 0x36   | Input voltage at which the channel stops power conversion.  | R/W word | V      | Yes   | 1.35            |
| VIN_UV_WARN_LIMIT | 0x58   | Input supply undervoltage warning limit.                    | R/W word | V      | Yes   | - 1.0           |

## VIN\_ON

The VIN\_ON command sets the value of the V IN voltage, in volts, at which the LT7176/LT7176-1 starts power conversion.

Note that the LT7176/LT7176-1 regulator does not start unless either EXTV CC is more than 3.0V or V IN is more than 2.7V.

This command has two data bytes encoded in half-precision floating-point format.

-  Maximum = 6.0V
-  Minimum = 1.4V

## VIN\_OFF

The VIN\_OFF command sets the value of the V IN voltage, in volts, at which the LT7176/LT7176-1 stops power conversion.

This command has two data bytes encoded in half-precision floating-point format.

-  Maximum = 6.0V
-  Minimum = 1.35V

## VIN\_UV\_WARN\_LIMIT

The VIN\_UV\_WARN\_LIMIT command sets the value of the input voltage that causes an input voltage low warning.

This alarm is masked until the input exceeds the warning limit at least once since the LT7176/LT7176-1 has been powered.

In response to the VIN\_UV\_WARN\_LIMIT being exceeded, the device also does the following:

-  Sets the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Sets the INPUT bit in the STATUS\_WORD command.
-  Sets the VIN undervoltage warning bit in the STATUS\_INPUT command.
-  Notifies the host by asserting the ALERT pin low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

This VIN\_UV\_WARN\_LIMIT command has two data bytes encoded in half-precision floating-point format.

-  Maximum = 7.0V
-  Minimum = -1.0V

The low-input-voltage warning is detected by the ADC. The typical response time is less than 5ms in continuous monitor mode and less than 100ms in low-power mode. Note that this response delay occurs even when the previous ADC measurement is under the new VIN\_UV\_WARN\_LIMIT command.

## Output Voltage and Limits

Table 19. Output Voltage and Limits Commands

| COMMANDNAME              | CODE   | DESCRIPTION                                                                  | TYPE     | UNIT 1   | NVM   | DEFAULT VALUE   |
|--------------------------|--------|------------------------------------------------------------------------------|----------|----------|-------|-----------------|
| VOUT_MODE                | 0x20   | Output voltage format and exponent.                                          | R byte   | N/A      | No    | 0x60            |
| VOUT_COMMAND             | 0x21   | Nominal output voltage set point.                                            | R/W word | V        | Yes   | 0.3             |
| VOUT_MAX                 | 0x24   | Upper limit on the commanded output voltage.                                 | R/W word | V        | Yes   | 0.323           |
| VOUT_MARGIN_HIGH         | 0x25   | Margin high output voltage set point.                                        | R/W word | V        | Yes   | 0.315           |
| VOUT_MARGIN_LOW          | 0x26   | Margin low output voltage set point.                                         | R/W word | V        | Yes   | 0.3             |
| VOUT_OV_FAULT_LIMIT      | 0x40   | Output overvoltage fault limit.                                              | R/W word | V        | Yes   | 0.33            |
| VOUT_OV_WARN_LIMIT       | 0x42   | Output overvoltage warning limit.                                            | R/W word | V        | Yes   | 0.323           |
| VOUT_UV_WARN_LIMIT       | 0x43   | Output undervoltage warning limit.                                           | R/W word | V        | Yes   | 0.278           |
| VOUT_UV_FAULT_LIMIT      | 0x44   | Output undervoltage fault limit.                                             | R/W word | V        | Yes   | 0.27            |
| MFR_DISCHARGE_ THRESHOLD | 0xE4   | The voltage threshold that determines output has decayed sufficiently.       | R/W word | V        | Yes   | 0.2             |
| MFR_PGOOD_DELAY          | 0xF2   | Time output voltage must be betweenUV and OVbeforePGOOD transitions high.    | R/W word | ms       | Yes   | 1.0             |
| MFR_NOT_PGOOD_DELAY      | 0xF3   | Time output voltage must be below UV or above OVbeforePGOOD transitions low. | R/W word | ms       | Yes   | 0.1             |

## VOUT\_MODE

The read-only VOUT\_MODE command returns 0x60, indicating that the output voltage commands use the IEEE half-precision floating-point format.

## VOUT\_COMMAND

The  VOUT\_COMMAND  command  sets  the  output  voltage  when  the  OPERATION  command  has  selected VOUT\_COMMAND and uses half-precision floating-point format.

If OPERATION is set to 0x80 (turn on the output with the target voltage of VOUT\_COMMAND) and VOUT\_COMMAND is greater than VOUT\_MAX, the target output voltage is limited to VOUT\_MAX. When VOUT\_COMMAND is commanded to a value greater than VOUT\_MAX, a VOUT\_MAX warning occurs.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  this command at power-up.

Bits[2:1]  of  MFR\_CHAN\_CONFIG\_LT7176  select  the  output  voltage  range.  See Table  20 for  the  recommended minimum output voltage for each voltage range.

Table 20. Output Voltage Range Maximums and Minimums

| 1.375V V OUT RANGE   | 2.75V V OUT RANGE   | 3.4V V OUT RANGE   |
|----------------------|---------------------|--------------------|
| 1.375Vmaximum        | 2.75Vmaximum        | 3.4Vmaximum        |
| 0.3V minimum         | 0.8V minimum        | 1.6V minimum       |

## VOUT\_MAX

The  VOUT\_MAX  command  sets  an  upper  limit  on  the  commanded  voltage.  It  applies  to  VOUT\_COMMAND, VOUT\_MARGIN\_HIGH,  and  VOUT\_MARGIN\_LOW.  If  the  output  voltage  is  commanded  to  a  value  greater  than VOUT\_MAX, the target output voltage is limited to VOUT\_MAX. When VOUT\_MAX is lower than VOUT\_COMMAND, VOUT\_MARGIN\_HIGH, or VOUT\_MARGIN\_LOW, a VOUT\_MAX warning occurs.

The VOUT\_MAX command uses a half-precision floating point format.

-  Maximum = 5.5 V
-  Minimum = 0.3 V

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  this command at power-up.

## VOUT\_MARGIN\_HIGH

The  VOUT\_MARGIN\_HIGH  command  loads  the  LT7176/LT7176-1  with  the  voltage  to  which  the  output  is  to  be regulated  when  the  OPERATION  command  is  set  to  0xA8  (margin  high).  When  OPERATION  is  set  to  0xA8  and VOUT\_MARGIN\_HIGH is greater than VOUT\_MAX, the output voltage is limited to VOUT\_MAX. When VOUT\_MARGIN\_HIGH is commanded to a value greater than VOUT\_MAX, a VOUT\_MAX warning occurs.

The VOUT\_MARGIN\_HIGH command uses half-precision floating point format.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  the VOUT\_MARGIN\_HIGH command at power-up.

Bits[2:1] of MFR\_CHAN\_CONFIG\_LT7176 select the output voltage range.

Table 21. Output Voltage Range Maximums and Minimums

| 1.375V V OUT RANGE   | 2.75V V OUT RANGE   | 3.4V V OUT RANGE   |
|----------------------|---------------------|--------------------|
| 1.375Vmaximum        | 2.75Vmaximum        | 3.4Vmaximum        |
| 0.3V minimum         | 0.8V minimum        | 1.6V minimum       |

## VOUT\_MARGIN\_LOW

The VOUT\_MARGIN\_LOW command loads the LT7176/LT7176-1 with the voltage to which the output is to be changed when the OPERATION command is set to 0x98 (margin low). When OPERATION is set to 0x98 and VOUT\_MARGIN\_LOW is greater than VOUT\_MAX, the output voltage is limited to VOUT\_MAX. When VOUT\_MARGIN\_LOW is commanded to a value greater than VOUT\_MAX, the VOUT\_MAX\_WARNING bit in VOUT\_STATUS is set.

The VOUT\_MARGIN\_LOW command uses half-precision floating point format.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  this command at power-up.

Bits[2:1] MFR\_CHAN\_CONFIG\_LT7176 select the output voltage range.

Table 22. Output Voltage Range Maximums and Minimums

| 1.375V V OUT RANGE   | 2.75V V OUT RANGE   | 3.4V V OUT RANGE   |
|----------------------|---------------------|--------------------|
| 1.375Vmaximum        | 2.75Vmaximum        | 3.4Vmaximum        |
| 0.3V minimum         | 0.8V minimum        | 1.6V minimum       |

## VOUT\_OV\_FAULT\_LIMIT

The VOUT\_OV\_FAULT\_LIMIT command sets the value of the output voltage measured at the VSENSE pins, which causes an output overvoltage fault.

The VOUT\_OV\_FAULT\_LIMIT command uses a half-precision floating point format.

-  Maximum = 6.0V
-  Minimum = 0.3V

The value must be greater than VOUT\_UV\_WARN\_LIMIT, VOUT\_UV\_FAULT\_LIMIT, and MFR\_DISCHARGE\_THRESHOLD, or an invalid data error occurs.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  this command at power-up.

## VOUT\_OV\_WARN\_LIMIT

The VOUT\_OV\_WARN\_LIMIT command sets the value of the output voltage measured at the VSENSE pins, which causes an output overvoltage warning. In  response  to  the  VOUT\_OV\_WARN\_LIMIT  being  exceeded,  the LT7176/LT7176-1 also do the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the VOUT bit in the STATUS\_WORD command.
-  Set the VOUT overvoltage warning bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

The VOUT\_OV\_WARN\_LIMIT command uses a half-precision floating point format.

-  Maximum = 6.0V
-  Minimum = 0.0V

The value must be greater than VOUT\_UV\_WARN\_LIMIT, VOUT\_UV\_FAULT\_LIMIT, and MFR\_DISCHARGE\_THRESHOLD, or an invalid data error occurs.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  this command at power-up.

## VOUT\_UV\_WARN\_LIMIT

The VOUT\_UV\_WARN\_LIMIT command sets the value of the output voltage measured at the VSENSE pins, which causes an output undervoltage warning.

In response to VOUT\_UV\_WARN\_LIMIT being exceeded, the LT7176/LT7176-1 also do the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE.
-  Set the VOUT bit in the STATUS\_WORD.
-  Set the VOUT undervoltage warning bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin is low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

The VOUT\_UV\_WARN\_LIMIT command uses a half-precision floating point format.

-  Maximum = 5.5V
-  Minimum = 0.0V

The value must be less than VOUT\_OV\_WARN\_LIMIT and VOUT\_OV\_FAULT\_LIMIT, or an invalid data error occurs.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  the VOUT\_UV\_WARN\_LIMIT command at power-up.

## VOUT\_UV\_FAULT\_LIMIT

The VOUT\_UV\_FAULT\_LIMIT command sets the value of the output voltage measured at the VSENSE pins, which causes an output undervoltage fault.

The VOUT\_UV\_FAULT\_LIMIT command uses a half-precision floating point format.

-  Maximum = 5.5V
-  Minimum = 0.27V

The value must be less than VOUT\_OV\_WARN\_LIMIT and VOUT\_OV\_FAULT\_LIMIT, or an invalid data error occurs.

When  Bit  6  of  MFR\_CONFIG\_ALL\_LT7176  is  0,  configuration  resistors  may  override  stored  NVM  values  for  the VOUT\_UV\_FAULT\_LIMIT command at power-up.

## MFR\_DISCHARGE\_THRESHOLD

The MFR\_DISCHARGE\_THRESHOLD command specifies the output voltage threshold below which the output voltage must decay to enable the channel if the discharge threshold feature is enabled (Bit 0 of MFR\_CHAN\_CONFIG\_LT7176 is 0).

If the discharge threshold is enabled, when automatically retrying after a fault, the device also waits for V OUT to be less than the discharge threshold after waiting MFR\_RETRY\_DELAY.

The value must be less than VOUT\_OV\_WARN\_LIMIT and VOUT\_OV\_FAULT\_LIMIT, or an invalid data error occurs.

This command uses a half-precision floating-point format.

-  Maximum = 6V
-  Minimum = 0.1V

## MFR\_PGOOD\_DELAY

The MFR\_PGOOD\_DELAY command sets the time, in milliseconds, rounded to the nearest 10µs, that the output voltage must be between VOUT\_OV\_FAULT\_LIMIT and VOUT\_UV\_FAULT\_LIMIT before the PGOOD pin transitions high. If the output voltage moves to less than the undervoltage limit or more than the overvoltage limit before the PGOOD pin transitions high, the delay timer resets to zero. Note that PGOOD is always held low when the channel is off and during TON\_RISE, regardless of whether VOUT is within the limits.

This command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum = 0ms

## MFR\_NOT\_PGOOD\_DELAY

The MFR\_NOT\_PGOOD\_DELAY command sets the time in milliseconds, rounded to the nearest 10 µs, that the output voltage must be between VOUT\_OV\_FAULT\_LIMIT and VOUT\_UV\_FAULT\_LIMIT before the PGOOD pin is pulled low. If the output voltage is between the undervoltage and overvoltage limits before PGOOD transitions low, the delay timer resets to zero. Note that the MFR\_NOT\_PGOOD\_DELAY command only applies when the channel is enabled. If the channel is disabled by the MFR\_NOT\_PGOOD\_DELAY command, the RUN pin, or a fault condition set to disable the output, the PGOOD pin is pulled low immediately.

This command uses a half-precision floating-point format.

-  Maximum = 100ms
-  Minimum = 0ms

## Output Current Limits

Table 23. Output Current Limits Commands

| COMMANDNAME        | CODE   | DESCRIPTION                      | TYPE     | UNIT   | NVM   | DEFAULT    |
|--------------------|--------|----------------------------------|----------|--------|-------|------------|
| IOUT_OC_WARN_LIMIT | 0x4A   | Output overcurrent warning limit | R/W word | A      | Yes   | VALUE 24.0 |

## IOUT\_OC\_WARN\_LIMIT

The  IOUT\_OC\_WARN\_LIMIT  command  sets  the  value  of  the  output  current  that  causes  an  output  overcurrent warning in amperes. This value is the total current limit, not per phase.

In response to the IOUT\_OC\_WARN\_LIMIT being exceeded, the LT7176/LT7176-1 do the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the IOUT bit in the STATUS\_WORD command.
-  Set the I OUT overcurrent warning bit in the STATUS\_IOUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

The IOUT\_OC\_WARN\_LIMIT command uses a half-precision floating point format.

-  Maximum = 30A
-  Minimum = 0.0A

The output overcurrent warning is detected by the ADC. Typical response time is less than 5ms in continuous-monitor mode and is less than 100ms in low-power mode.

The IOUT\_OC\_WARN\_LIMIT command is ignored during TON\_RISE.

## Temperature

## Table 24. Temperature Commands

| COMMANDNAME    | CODE   | DESCRIPTION                   | TYPE     | UNIT   | NVM   |   DEFAULT VALUE |
|----------------|--------|-------------------------------|----------|--------|-------|-----------------|
| OT_FAULT_LIMIT | 0x4F   | Overtemperature fault limit   | R/W word | °C     | Yes   |             160 |
| OT_WARN_LIMIT  | 0x51   | Overtemperature warning limit | R/W word | °C     | Yes   |             140 |

## OT\_FAULT\_LIMIT

The OT\_FAULT\_LIMIT command sets the value of the internal die temperature in degrees Celsius, which causes an overtemperature fault. This command uses a half-precision floating-point format.

-  Maximum = +160°C
-  Minimum = -60°C

## OT\_WARN\_LIMIT

The OT\_WARN\_LIMIT command sets the value of the internal die temperature in degrees Celsius, which causes an overtemperature  warning.  In  response  to  the  OT\_WARN\_LIMIT  being  exceeded,  the  LT7176/LT7176-1  use  the following steps:

-  Set the TEMPERATURE bit in the STATUS\_BYTE command.
-  Set the overtemperature warning bit in the STATUS\_TEMPERATURE command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

The OT\_WARN\_LIMIT command uses a half-precision floating point format.

-  Maximum = +160°C
-  Minimum = -60°C

The overtemperature warning is detected by the ADC. The typical response time is less than 5ms in continuous monitor mode and less than 100ms in low-power mode.

## Timing

Sequencing On

## Table 25. Sequencing On Commands

| COMMANDNAME          | CODE   | DESCRIPTION                                                                     | TYPE     | UNIT   | NVM   |   DEFAULT VALUE |
|----------------------|--------|---------------------------------------------------------------------------------|----------|--------|-------|-----------------|
| VOUT_TRANSITION_RATE | 0x27   | Rates the output changes when commandedto a newvalue.                           | R/W word | V/ms   | Yes   |            0.25 |
| TON_DELAY            | 0x60   | Time fromRUNor OPERATION on to output turn-on.                                  | R/W word | ms     | Yes   |            0    |
| TON_RISE             | 0x61   | Time from output turn-on to reach the commanded value.                          | R/W word | ms     | Yes   |            1    |
| TON_MAX_FAULT_LIMIT  | 0x62   | Maximum time from the start of TON_RISE for V OUT to cross VOUT_UV_FAULT_LIMIT. | R/W word | ms     | Yes   |            5    |

## VOUT\_TRANSITION\_RATE

When a PMBus device receives either a VOUT\_COMMAND, OPERATION, VOUT\_MARGIN\_HIGH, VOUT\_MARGIN\_LOW, or VOUT\_MAX command that causes the output voltage to change, VOUT\_TRANSITION\_RATE sets the rate (in V/ms) at which the output voltage changes. This commanded rate of change does not apply when the unit is commanded on or off. Values of greater than 0.05V/ms are recommended for optimal performance. At smaller sizes, the transitionstep-size quantization error may be undesirable.

The VOUT\_TRANSITION\_RATE command uses a half-precision floating-point format.

-  Maximum = 25V/ms (While the VOUT\_TRANSITION\_RATE can be commanded up to 25V/ms, the actual achievable output voltage transition rate may be limited by other factors, including output capacitance, current limit, and compensation.)
-  Minimum = 0.01V/ms

## TON\_DELAY

The TON\_DELAY command sets the time, in milliseconds, from when a start condition is received until the output voltage starts to rise. The time is internally rounded down to the nearest 10µs. This command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum = 0ms

## TON\_RISE

The TON\_RISE command sets the time, in milliseconds, from the time the output starts to rise to the time the output enters the regulation band. The time is internally rounded to the nearest 10µs. The channel is set to pulse-skipping mode during TON\_RISE events. The maximum rise rate of the digital ramp controller is 25V/ms. If the commanded output voltage divided by TON\_RISE is more than 25V/ms, the digital control ramps at this rate. The minimum output voltage  rise  time  is  further  limited  by  the  analog  behavior  of  the  switcher,  which  is  affected  by  several  factors, including output capacitance, current-limit selection, and loop compensation.

When TON\_RISE is commanded to change during the TON ramp-up, the LT7176/LT7176-1 act on the command as soon as possible. However, the new ramp rate is calculated for a full ramp from 0V. Because the output is partially ramped and time has already passed, the actual total ramp time differs from the new value for TON\_RISE.

The TON\_RISE command uses a half-precision floating-point format.

-  Maximum = 63ms
-  Minimum = 0ms

## TON\_MAX\_FAULT\_LIMIT

The TON\_MAX\_FAULT\_LIMIT command sets the value, in milliseconds, that determines how long the LT7176/LT71761 can attempt to power up the output without reaching the output undervoltage fault limit. The time is internally rounded down to the nearest 10µs. A data value of 0ms means that there is no limit and that the unit can attempt to bring up the output voltage indefinitely.

The TON\_MAX\_FAULT\_LIMIT time starts after TON\_DELAY has finished, and a soft-start sequence is started. The resolution  of  the  TON\_MAX\_FAULT\_LIMIT  is  10µs.  If  the  VOUT\_UV\_FAULT\_LIMIT  is  not  reached  within  the TON\_MAX\_FAULT\_LIMIT time, the response of this fault is determined of the value of the TON\_MAX\_FAULT\_RESPONSE command value.

The TON\_MAX\_FAULT\_LIMIT command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum (disabled) = 0ms

## Sequencing Off

## Table 26. Sequencing Off Commands

| COMMANDNAME         | CODE   | DESCRIPTION                                                                                           | TYPE     | UNIT   | NVM   |   DEFAULT VALUE |
|---------------------|--------|-------------------------------------------------------------------------------------------------------|----------|--------|-------|-----------------|
| TOFF_DELAY          | 0x64   | Time fromRUN and/or OPERATION off to the start of TOFF_FALL                                           | R/W word | ms     | Yes   |               0 |
| TOFF_FALL           | 0x65   | Time from when the output starts to fall until the output reaches 0 V                                 | R/W word | ms     | Yes   |               2 |
| TOFF_MAX_WARN_LIMIT | 0x66   | Maximum allowed time, after TOFF_FALL is completed, for output to decay below MFR_DISCHARGE_THRESHOLD | R/W word | ms     | Yes   |               0 |

## TOFF\_DELAY

The TOFF\_DELAY command sets the time, in milliseconds, from when a stop condition is received until the output voltage starts to fall. The time is internally rounded down to the nearest 10µs. This command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum = 0ms

## TOFF\_FALL

The TOFF\_FALL command sets the time, in milliseconds, from the end of the turn-off delay time until the output voltage is commanded to zero. The time is internally rounded to the nearest 10µs. It is the ramp time of the V OUT DAC.

During VOUT ramp-down, the LT7176/LT7176-1 uses continuous conduction mode if either Bit 2 of MFR\_PWM\_MODE\_LT7176 is set to 1, or Bit 0 of MFR\_PWM\_MODE\_LT7176 is set to 0. Otherwise, V OUT decays only due to the external load (and the 250Ω internal pull -down if Bit 6 of MFR\_CHAN\_CONFIG\_LT7176 is set to 1). For defined TOFF\_FALL times, it is recommended to set Bit 2 of MFR\_PWM\_MODE\_LT7176 to 1. The maximum fall rate of the digital ramp controller is 25V/ms. If the commanded output voltage divided by TOFF\_FALL is more than 25V/ms, the digital control ramps down at this rate. The minimum V OUT fall time is further limited by the analog behavior of the switcher, which is affected by several factors, including output load, output capacitance, and current-limit selection. After the digital ramp-down is completed, the switching regulator is disabled. If the V OUT fall rate is limited by the analog behavior, the regulator disables before the ramp-down is complete, and the output is not forced all the way to zero. Setting TOFF\_FALL to 2ms or greater ensures that V OUT ramps to zero during TOFF\_FALL.

The TOFF\_FALL command uses a half-precision floating-point format.

-  Maximum = 63ms
-  Minimum = 0ms

## TOFF\_MAX\_WARN\_LIMIT

The TOFF\_MAX\_WARN\_LIMIT  command  sets  the  value, in milliseconds, that determines how long the LT7176/LT7176-1 can attempt to turn off the output until a warning is asserted. The time is internally rounded to the nearest 1ms. The output is considered off when the VOUT voltage is less than MFR\_DISCHARGE\_THRESHOLD. The calculation begins after TOFF\_FALL is complete. TOFF\_MAX\_WARN is not enabled if the discharge requirement is disabled (Bit 0 of MFR\_CHAN\_CONFIG\_LT7176 is set to 1).

In response to the TOFF\_MAX\_WARN\_LIMIT being exceeded, the LT7176/LT7176-1 also do the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the VOUT bit in the STATUS\_WORD command.
-  Set the TOFF maximum warning bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

The special data value of 0ms means that there is no limit and that the LT7176/LT7176-1 can attempt to turn off the output voltage indefinitely.

The TOFF\_MAX\_WARN\_LIMIT command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum = 10.0ms
-  Disabled = 0.0ms

## Fault Response

## All Faults

## Table 27. All Faults Commands

| COMMANDNAME     | CODE   | DESCRIPTION                       | TYPE     | UNIT   | NVM   |   DEFAULT VALUE |
|-----------------|--------|-----------------------------------|----------|--------|-------|-----------------|
| MFR_RETRY_DELAY | 0xDB   | Retry interval during fault retry | R/W word | ms     | Yes   |              10 |

## MFR\_RETRY\_DELAY

The MFR\_RETRY\_DELAY command sets the time in milliseconds between restarts if the fault response is to retry the controller at specified intervals. The time is internally rounded down to the nearest 10µs. This command value is used for all fault responses that require a retry. The retry time starts when a fault has been detected by the offending channel.

Note that the retry delay time is set by either the MFR\_RETRY\_DELAY command or the time required for the regulated output to decay below MFR\_DISCHARGE\_THRESHOLD, whichever is longer. If the natural decay time of the output is too long, it is possible to remove the voltage requirement of the MFR\_RETRY\_DELAY command by asserting Bit 0 of MFR\_CHAN\_CONFIG\_LT7176.

The MFR\_RETRY\_DELAY command uses a half-precision floating-point format.

-  Maximum = 64000ms
-  Minimum = 0.02ms

## Input Voltage

Input-voltage faults only cause a configured fault response when the associated device is on. The FAULT pin will also only be asserted when the device is on. However, the ALERT pin is asserted low unless masked by SMBALERT\_MASK.

## Table 28. Input Voltage Commands

| COMMANDNAME           | CODE   | DESCRIPTION                                                     | TYPE     | NVM   | DEFAULT VALUE   |
|-----------------------|--------|-----------------------------------------------------------------|----------|-------|-----------------|
| VIN_OV_FAULT_RESPONSE | 0x56   | Action to be taken when an input overvoltage fault is detected. | R/W byte | Yes   | 0xB8            |

## VIN\_OV\_FAULT\_RESPONSE

The  VIN\_OV\_FAULT\_RESPONSE  command  sets  the  action  the  LT7176/LT7176-1  takes  in  response  to  an  input overvoltage fault.

The LT7176/LT7176-1 also does the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the INPUT bit in the upper byte of the STATUS\_WORD command.
-  Set the VIN\_OV fault bit in the STATUS\_INPUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

Table 29. Data Byte Contents: VIN\_OV\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                             | VALUE         | MEANING                                                                                                                                                                                                                                                                                                                         |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VIN_OV fault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 00            | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                        |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VIN_OV fault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 01            | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                        |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VIN_OV fault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 10 (default)  | The LT7176/LT7176-1 shuts down immediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                                                                                                                                                                      |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VIN_OV fault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 11            | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                        |
| [5:3]  | Retry setting.                                                                                                                                          | 000-110       | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the devices are commandedoff or bias power is removed by removing V IN and EXTV CC .                                                                                                                                                         |
| [5:3]  | Retry setting.                                                                                                                                          | 111 (default) | The LT7176/LT7176-1 attempts to restart continuously, without limitation, until the devices are commanded off (by the RUNpin or the OPERATIONcommandor both), bias power is removed, or another fault condition causes the unit to shut down without retry. Note that the retry interval is set by the MFR_RETRY_DELAY command. |
| [2:0]  | Delay time.                                                                                                                                             | 000 (default) | Mustbe0. Writing this to a non-zero generates a CMLfault.                                                                                                                                                                                                                                                                       |

## Output Voltage

Output-voltage faults only cause a configured fault response when the associated channel is on. However, the ALERT pin is asserted low unless masked by SMBALERT\_MASK.

Table 30. Output Voltage Commands

| COMMANDNAME            | CODE   | DESCRIPTION                                                      | TYPE     | NVM   | DEFAULT VALUE   |
|------------------------|--------|------------------------------------------------------------------|----------|-------|-----------------|
| VOUT_OV_FAULT_RESPONSE | 0x41   | Action to be taken when an output overvoltage fault is detected  | R/W byte | Yes   | 0xB8            |
| VOUT_UV_FAULT_RESPONSE | 0x45   | Action to be taken when an output undervoltage fault is detected | R/W byte | Yes   | 0x00            |
| TON_MAX_FAULT_RESPONSE | 0x63   | Action to be taken when a TON_MAX_FAULT event is detected        | R/W byte | Yes   | 0x00            |

## VOUT\_OV\_FAULT\_RESPONSE

The VOUT\_OV\_FAULT\_RESPONSE command sets the action the LT7176/LT7176-1 takes in response to an output overvoltage fault. The LT7176/LT7176-1 also does the following:

-  Set the VOUT\_OV bit in the STATUS\_BYTE.
-  Set the VOUT bit in the STATUS\_WORD.
-  Set the VOUT\_OV fault bit in the STATUS\_VOUT command.
-  Set the VOUT\_OV warning bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

Table 31. Data Byte Contents: VOUT\_OV\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                                           | VALUE         | MEANING                                                                                                                                                                                                                                                                                                                            |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VOUT_OV fault and warning bits in the status commands and pulls the ALERT pin low, unless masked. | 00            | The LT7176/LT7176-1 operates in continuous mode while the fault is active, attempting to regulate to the programmed voltage.                                                                                                                                                                                                       |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VOUT_OV fault and warning bits in the status commands and pulls the ALERT pin low, unless masked. | 01            | The LT7176/LT7176-1 continues operation for the delay time specified by Bits[2:0] and the delay time unit specified for that particular fault. If the fault condition is still present at the end of the delay time, the devices respond as programmed in the retry setting (Bits[5:3]).                                           |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VOUT_OV fault and warning bits in the status commands and pulls the ALERT pin low, unless masked. | 10 (default)  | The LT7176/LT7176-1 shuts downimmediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                                                                                                                                                                          |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the VOUT_OV fault and warning bits in the status commands and pulls the ALERT pin low, unless masked. | 11            | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                           |
| [5:3]  | Retry setting.                                                                                                                                                        | 000 to 110    | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the LT7176/LT7176-1 are commandedofforbiaspowerisremovedbyremovingV IN and EXTV CC .                                                                                                                                                            |
| [5:3]  | Retry setting.                                                                                                                                                        | 111 (default) | The LT7176/LT7176-1 attempts to restart continuously, without limitation, until the devices are commanded off (by the RUN pin or the OPERATION command or both), bias power is removed, or another fault condition causes the unit to shut down without retry. Note that the retry interval is set by the MFR_RETRY_DELAY command. |
| [2:0]  | Delay time.                                                                                                                                                           | XXX 1         | The delay time is in 10µs increments. This delay time determines how long the channel continues operating after a fault is detected. 000 is the default.                                                                                                                                                                           |

## VOUT\_UV\_FAULT\_RESPONSE

The VOUT\_UV\_FAULT\_RESPONSE command sets the action the LT7176/LT7176-1 takes in response to an output undervoltage fault. The LT7176/LT7176-1 also does the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the VOUT bit in the STATUS\_WORD command.
-  Set the VOUT UV fault bit in the STATUS\_VOUT command.
-  Set the VOUT UV warning bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.
-  The UV fault and warning are masked until the following criteria are achieved:
-  The TON\_MAX\_FAULT\_LIMIT is reached.
-  The TON\_DELAY sequence completes.
-  The TON\_RISE sequence completes.
-  The VOUT\_UV\_FAULT\_LIMIT threshold is reached.
-  The IOUT\_OC\_FAULT\_LIMIT is not present.

The UV fault and warning are masked whenever the channel is not active. The UV fault and warning are masked during TON\_RISE and TOFF\_FALL sequencing.

Table 32. Data Byte Contents: VOUT\_UV\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                                         | VALUE                | MEANING                                                                                                                                                                                                                                                                                                                       |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7:6    | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the VOUT_UV fault and warning bits in the STATUS commands and pull the ALERT pin low, unless masked. | 00 (default)         | The LT7176/LT7176-1 continues operation without interruption.                                                                                                                                                                                                                                                                 |
| 7:6    | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the VOUT_UV fault and warning bits in the STATUS commands and pull the ALERT pin low, unless masked. | 01                   | The LT7176/LT7176-1 continues operation for the delay time specified by Bits[2:0] and the delay time unit specified for that particular fault. If the fault condition is still present at the end of the delay time, the devices respond as programmed in the retry setting (Bits[5:3]).                                      |
| 7:6    | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the VOUT_UV fault and warning bits in the STATUS commands and pull the ALERT pin low, unless masked. | 10                   | The LT7176/LT7176-1 shuts downimmediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                                                                                                                                                                     |
| 7:6    | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the VOUT_UV fault and warning bits in the STATUS commands and pull the ALERT pin low, unless masked. | 11                   | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                      |
| [5:3]  | Retry setting.                                                                                                                                                      | 000 (default) to 110 | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the devices are commandedoff or bias power is removed by removing V IN and EXTV CC .                                                                                                                                                       |
| [5:3]  | Retry setting.                                                                                                                                                      | 111                  | The LT7176/LT7176-1 attempt to restart continuously, without limitation, until the devices are commanded off (by the RUNpin or OPERATIONcommandor both), bias power is removed, or another fault condition causes the devices to shut down without retry. Note that the retry interval is set by the MFR_RETRY_DELAY command. |
| [2:0]  | Delay time.                                                                                                                                                         | XXX 1                | The delay time is in 10µs increments. This delay time determines howlong the channel continues operating after a fault is detected. 000 is the default.                                                                                                                                                                       |

## TON\_MAX\_FAULT\_RESPONSE

The TON\_MAX\_FAULT\_RESPONSE command sets the action the LT7176/LT7176-1 takes in response to a TON MAX fault.

The LT7176/LT7176-1 also does the following:

-  Set the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE command.
-  Set the VOUT bit in the STATUS\_WORD command.
-  Set the TON MAX fault bit in the STATUS\_VOUT command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.
-  A value of 0 disables the TON\_MAX\_FAULT\_RESPONSE command. It is not recommended to use 0.

## Table 33. Data Byte Contents: TON\_MAX\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                            | VALUE                | MEANING                                                                                                                                                                                                                                                                                                                           |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the TONMAXfault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 00 (default)         | The LT7176/LT7176-1 continues operation without interruption.                                                                                                                                                                                                                                                                     |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the TONMAXfault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 01                   | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                          |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the TONMAXfault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 10                   | The LT7176/LT7176-1 shuts downimmediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                                                                                                                                                                         |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the TONMAXfault bit in the STATUS commands and pulls the ALERT pin low, unless masked. | 11                   | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                          |
| [5:3]  | Retry setting.                                                                                                                                         | 000 (default) to 110 | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the devices are commandedoff or bias power is removed by removing V IN and EXTV CC .                                                                                                                                                           |
| [5:3]  | Retry setting.                                                                                                                                         | 111                  | The LT7176/LT7176-1 attempt to restart continuously, without limitation, until the devices are commanded off (by the RUNpin or OPERATION commandor both), the bias power is removed, or another fault condition causes the devices to shut downwithout retry. Note that the retry interval is set by the MFR_RETRY_DELAY command. |
| [2:0]  | Delay time.                                                                                                                                            | XXX 1                | Must be 0. Writing this to non-zero generates a CML fault. 000 is the default.                                                                                                                                                                                                                                                    |

## Output Current

## Table 34. Output Current Commands

| COMMANDNAME            | CODE   | DESCRIPTION                                                     | TYPE     | NVM   | DEFAULT VALUE   |
|------------------------|--------|-----------------------------------------------------------------|----------|-------|-----------------|
| IOUT_OC_FAULT_RESPONSE | 0x47   | Action to be taken when an output overcurrent fault is detected | R/W byte | Yes   | 0x00            |

## IOUT\_OC\_FAULT\_RESPONSE

## Table 35. Data Byte Contents: IOUT\_OC\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                             | VALUE                | MEANING                                                                                                                                                                                                                                                                                                                      |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the IOUT OCfault bit in the status commands and pulls the ALERT pin low, unless masked. | 00 (default)         | The LT7176/LT7176-1 continues operation indefinitely while maintaining the output current set by MFR_PWM_MODE_LT7176,regardless of the output voltage (known as constant-current or brick-wall limiting).                                                                                                                    |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the IOUT OCfault bit in the status commands and pulls the ALERT pin low, unless masked. | 01                   | Not supported. Writing this value generates a CML fault.                                                                                                                                                                                                                                                                     |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the IOUT OCfault bit in the status commands and pulls the ALERT pin low, unless masked. | 10                   | The LT7176/LT7176-1 continues operation for the delay time specified by Bits[2:0] and the delay time unit specified for that particular fault. If the fault condition is still present at the end of the delay time, the devices respond as programmed in the retry setting (Bits[5:3]).                                     |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 sets the IOUT OCfault bit in the status commands and pulls the ALERT pin low, unless masked. | 11                   | The LT7176/LT7176-1 shuts downimmediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                                                                                                                                                                    |
| [5:3]  | Retry setting.                                                                                                                                          | 000 (default) to 110 | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the devices are commandedoff or bias power is removed by removing V IN and EXTV CC .                                                                                                                                                      |
| [5:3]  | Retry setting.                                                                                                                                          | 111                  | The LT7176/LT7176-1 attempt to restart continuously, without limitation, until the devices are commanded off (by the RUNpin or OPERATION commandor both), bias power is removed, or another fault condition causes the units to shut down without retry. Note that the retry interval is set by the MFR_RETRY_DELAY command. |
| [2:0]  | Delay time.                                                                                                                                             | XXX 1                | The delay time is in 10µs increments. This delay time determines how long the channel continues to operate after a fault is detected. 000 is the default.                                                                                                                                                                    |

## Temperature

Internal temperature faults only cause a configured fault response when the associated channel is on. However, the ALERT pin is asserted low unless masked by SMBALERT\_MASK.

Table 36. Temperature Command

| COMMANDNAME       | CODE   | DESCRIPTION                                                           | TYPE     | NVM   | DEFAULT VALUE   |
|-------------------|--------|-----------------------------------------------------------------------|----------|-------|-----------------|
| OT_FAULT_RESPONSE | 0x50   | Action to be taken when an internal overtemperature fault is detected | R/W Byte | Yes   | 0xC0            |

## OT\_FAULT\_RESPONSE

The  OT\_FAULT\_RESPONSE  command  sets  the  action  the  LT7176/LT7176-1  takes  in  response  to  an  internal overtemperature fault.

The LT7176/LT7176-1 also does the following:

-  Set the MFR bit in the STATUS\_WORD command.
-  Set the OT fault bit in the STATUS\_TEMPERATURE command.
-  Notify the host by asserting the ALERT pin is low, unless masked.
-  Share fault by asserting the FAULT pin low, if selected by MFR\_FAULT\_PROPAGATE\_LT7176.

Table 37. Data Byte Contents: OT\_FAULT\_RESPONSE

| BITS   | DESCRIPTION                                                                                                                                      | VALUE                | MEANING                                                                                                                                                                         |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the OTfault bit in the STATUS commands and pull the ALERT pin low, unless masked. | 00                   | Not supported. Writing this value generates a CMLfault.                                                                                                                         |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the OTfault bit in the STATUS commands and pull the ALERT pin low, unless masked. | 01                   | Not supported. Writing this value generates a CMLfault.                                                                                                                         |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the OTfault bit in the STATUS commands and pull the ALERT pin low, unless masked. | 10                   | The LT7176/LT7176-1 shuts downimmediately (disables the output) and responds according to the retry setting in Bits[5:3].                                                       |
| [7:6]  | Response. For all values of Bits[7:6], the LT7176/LT7176-1 set the OTfault bit in the STATUS commands and pull the ALERT pin low, unless masked. | 11 (default)         | The output of the LT7176/LT7176-1 is disabled while the fault is present. Operation resumes, and the output is enabled when the fault condition no longer exists.               |
| [5:3]  | Retry setting.                                                                                                                                   | 000 (default) to 110 | The LT7176/LT7176-1 does not attempt to restart. The output remains disabled until the LT7176/LT7176-1 are commandedoff or bias power is removed by removing V IN and EXTV CC . |
| [5:3]  |                                                                                                                                                  | 111                  | Not supported. Writing this value generates a CMLfault.                                                                                                                         |
| [2:0]  | Ignored.                                                                                                                                         | XXX 1                | Ignored. 000 is the default.                                                                                                                                                    |

## Fault Sharing

## Table 38. Fault Sharing Commands

| COMMANDNAME                | CODE   | DESCRIPTION                                             | TYPE     | NVM   | DEFAULT   |
|----------------------------|--------|---------------------------------------------------------|----------|-------|-----------|
| MFR_FAULT_PROPAGATE_LT7176 | 0xD2   | Determines which faults are propagated to the FAULT pin | R/W Word | Y     | 0xA097    |
| MFR_FAULT_RESPONSE         | 0xD5   | Action to be taken when the FAULT pin is asserted low   | R/W Byte | Y     | 0xC0      |

## MFR\_FAULT\_PROPAGATE\_LT7176

The MFR\_FAULT\_PROPAGATE\_LT7176 command selects the conditions that can cause the FAULT pin to be asserted low. When the FAULT pin is asserted low due to a fault condition, it will remain asserted until:

-  The channel is disabled and then enabled (by RUN or OPERATION, depending on ON\_OFF\_CONFIG), clearing the fault condition.
-  The MFR\_RETRY\_DELAY expires when the fault condition is no longer present for faults that are configured with a retry response.

A fault is only propagated to the FAULT pin if the corresponding fault response command is configured to disable the channel and the corresponding bit is set to 1 in MFR\_FAULT\_PROPAGATE\_LT7176.

Table 39. Data Byte Contents: MFR\_FAULT\_PROPAGATE\_LT7176

| BITS    |   DEFAULT | CONDITION                         | DESCRIPTION                                                                                                                                                                                                                                                                         |
|---------|-----------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 15      |         1 | V OUT turned on while discharging | Enables propagation of theVOUT discharge condition. This is used when bit 0 of MFR_CHAN_CONFIG_LT7176 is 0 (discharge requirement enabled). If V OUT is turned on while V SENSE is above MFR_DISCHARGE_THRESHOLD, V OUT will be disabled until V SENSE decays below that threshold. |
| 14      |         0 | Reserved                          |                                                                                                                                                                                                                                                                                     |
| 13      |         1 | TON maxfault                      |                                                                                                                                                                                                                                                                                     |
| 12 to 8 |         0 | Reserved                          |                                                                                                                                                                                                                                                                                     |
| 7       |         1 | Overtemperature fault             |                                                                                                                                                                                                                                                                                     |
| 6 to 5  |         0 | Reserved                          |                                                                                                                                                                                                                                                                                     |
| 4       |         1 | Input OVfault                     |                                                                                                                                                                                                                                                                                     |
| 3       |         0 | Reserved                          |                                                                                                                                                                                                                                                                                     |
| 2       |         1 | I OUT OCfault                     |                                                                                                                                                                                                                                                                                     |
| 1       |         1 | V OUT UV fault                    |                                                                                                                                                                                                                                                                                     |
| 0       |         1 | V OUT OV fault                    |                                                                                                                                                                                                                                                                                     |

## MFR\_FAULT\_RESPONSE

This command determines the device's response to the FAULT pin being pulled low.

## Table 40. MFR\_FAULT\_RESPONSE Command

| VALUE   | MEANING                                                                                                  |
|---------|----------------------------------------------------------------------------------------------------------|
| 0xC0    | The device will stop delivering power as fast as possible in response to the FAULT pin being pulled low. |
| 0x00    | The device continues to operate without interruption.                                                    |

The LT7176/LT7176-1 also does the following:

-  Sets the NONE\_OF\_THE\_ABOVE bit in the STATUS\_BYTE.
-  Sets the MFR bit in the STATUS\_WORD.
-  Sets bit 0 in the STATUS\_MFR\_SPECIFIC command if bit 1 of MFR\_CHAN\_CONFIG\_LT7176 is not set.
-  Notifies the host by asserting the ALERT pin is low, unless masked. The ALERT pin pulled low can be disabled by setting bit 0 of MFR\_CHAN\_CONFIG\_LT7176.

## Identification

## Table 41. Identification Commands 1

| COMMANDNAME    | CODE   | DESCRIPTION                                       | TYPE    | NVM   | DEFAULT VALUE      |
|----------------|--------|---------------------------------------------------|---------|-------|--------------------|
| CAPABILITY     | 0x19   | PMBus optional communication protocols supported. | R byte  | No    | 0xD8               |
| PMBUS_REVISION | 0x98   | PMBus revision supported, currently 1.3.          | R byte  | No    | 0x33               |
| MFR_ID         | 0x99   | Returns ADI.                                      | R block | No    | ADI                |
| MFR_SERIAL     | 0x9E   | Unit-specific unique serial number.               | R block | No    | N/A                |
| IC_DEVICE_ID   | 0xAD   | Returns LT7176 or LT7176-1.                       | R block | No    | LT7176 or LT7176-1 |
| IC_DEVICE_REV  | 0xAE   | Manufacturer revision number.                     | R block | No    | N/A                |
| MFR_SPECIAL_ID | 0xE7   | Manufacturer code.                                | R word  | No    | 0x1C1D             |

## Status

Figure 1 summarizes the internal LT7176/LT7176-1 status registers accessible by the PMBus command. These status registers  indicate  various  faults,  warnings,  and  other  important  operating  conditions.  As  shown  in Figure  1 ,  the STATUS\_BYTE and STATUS\_WORD commands summarize the contents of other status registers.

The NONE\_OF\_THE\_ABOVE bit in STATUS\_BYTE indicates that one or more of the bits in the most significant nibble of STATUS\_WORD are also set.

Unless masked by SMBALERT\_MASK, any asserted bit in a STATUS\_x register (including any fault or warning) also pulls the ALERT pin low.

With some exceptions, the SMBALERT\_MASK command can be used to prevent the LT7176/LT7176-1 from pulling the ALERT pin low for bits in these registers on a bit-by-bit basis. These mask settings apply to STATUS\_WORD and STATUS\_BYTE in the same fashion as the status bits themselves. For example, if ALERT is  masked for  all  bits  in Channel 0 STATUS\_VOUT, ALERT is effectively masked for the VOUT bit in STATUS\_WORD for Page 0.

Status information contained in MFR\_COMMON and MFR\_PADS can be used to debug further or clarify the contents of STATUS\_BYTE or STATUS\_WORD, as shown in Figure 1 . However, the contents of MFR\_COMMON and MFR\_PADS do not directly affect the state of the ALERT pin.

Figure 1. Status Register Summary

<!-- image -->

Table 42. Status Commands

| COMMANDNAME           | CODE   | DESCRIPTION                                                                 | TYPE      | NVM   |
|-----------------------|--------|-----------------------------------------------------------------------------|-----------|-------|
| CLEAR_FAULTS          | 0x03   | Clear all fault bits.                                                       | Send byte | No    |
| SMBALERT_MASK         | 0x1B   | Mask ALERT pin.                                                             | Block R/W | Yes   |
| STATUS_BYTE           | 0x78   | One-byte summary of the faults and warnings of the LT7176/ LT7176-1.        | R/W byte  | No    |
| STATUS_WORD           | 0x79   | One-word summary of the faults and warnings of the LT7176/ LT7176-1.        | R/W word  | No    |
| STATUS_VOUT           | 0x7A   | Output voltage faults and warnings.                                         | R/W byte  | No    |
| STATUS_IOUT           | 0x7B   | Output current faults and warnings.                                         | R/W byte  | No    |
| STATUS_INPUT          | 0x7C   | Input supply faults and warnings.                                           | R/W byte  | No    |
| STATUS_TEMPERATURE    | 0x7D   | Internal temperature faults and warnings.                                   | R/W byte  | No    |
| STATUS_CML            | 0x7E   | Communications, memory, and logic faults and warnings.                      | R/W byte  | No    |
| STATUS_MFR_SPECIFIC   | 0x80   | Manufacturer-specific faults and warnings.                                  | R/W byte  | No    |
| MFR_PADS_LT7176       | 0xE5   | Digital status of I/O pads.                                                 | R word    | No    |
| MFR_COMMON            | 0xEF   | Manufacturer status bits are commonacross multiple Analog Devices' devices. | R/W byte  | No    |
| MFR_CHANNEL_STATE     | 0xF1   | Returns the state of the channel.                                           | R byte    | No    |
| MFR_PIN_CONFIG_STATUS | 0xF7   | Indicates the source of the pin configuration fault.                        | R byte    | No    |

## CLEAR\_FAULTS

The CLEAR\_FAULTS command clears any fault bits that have been set. This command clears all bits in all STATUS commands simultaneously. The CLEAR\_FAULTS command also deasserts the ALERT pin. If the fault is still present when the bit is cleared, the fault bit remains set, and the host is notified by asserting the ALERT pin is low.

The CLEAR\_FAULTS command does not cause the LT7176/LT7176-1 that have latched off for a fault condition to restart. The LT7176/ LT7176-1 devices that have shut down for a fault condition are restarted only when the following situations occur:

-  The output is commanded to turn off and then to turn back on via the RUN pin and/or the OPERATION command.
-  The MFR\_RESET command is issued.
-  The V IN and EXTV CC bias power are removed and reapplied to the LT7176/LT7176-1.
-  Reading the CLEAR\_FAULTS command also clears all bits in all STATUS commands and deasserts the ALERT pin.

## SMBALERT\_MASK

The SMBALERT\_MASK command can be used to prevent selected status bits from asserting ALERT low as they are asserted. Only supported bits can be masked.

The bits in the mask byte align with the bits in the specified status register. For example, if the STATUS\_TEMPERATURE command code is sent in the first data byte and the mask byte contains 0x40, a subsequent overtemperature warning is still set, Bit 6 of STATUS\_TEMPERATURE, but not assert ALERT low. All other supported STATUS\_TEMPERATURE bits continue to assert ALERT low if set.

SMBALERT\_MASK cannot be applied to the derived bits in STATUS\_BYTE or STATUS\_WORD. Bit 7, the busy fault bit, of STATUS\_BYTE can be masked. The STATUS\_WORD is not supported for SMBALERT\_MASK.

Providing an unsupported command code to SMBALERT\_MASK generates a CML for invalid and/or unsupported data.

Table 43. Factory Default SMBALERT\_MASK Settings

| STATUS REGISTER     | MASKVALUE   | MASKEDBITS    |
|---------------------|-------------|---------------|
| STATUS_BYTE         | 0x00        | None          |
| STATUS_VOUT         | 0x00        | None          |
| STATUS_IOUT         | 0x80        | IOUT_OC fault |
| STATUS_TEMPERATURE  | 0x00        | None          |
| STATUS_CML          | 0x00        | None          |
| STATUS_INPUT        | 0x00        | None          |
| STATUS_MFR_SPECIFIC | 0x00        | None          |

## STATUS\_BYTE

The STATUS\_BYTE command returns a one-byte summary of the most critical faults. Bit 7 can be cleared by writing a 1 to its position.

## Table 44. STATUS\_BYTE Contents

|   BIT | NAME           | DESCRIPTION                                                                                                                        |
|-------|----------------|------------------------------------------------------------------------------------------------------------------------------------|
|     7 | BUSY           | A fault is declared because the LT7176/LT7176-1 fails to respond to a command.                                                     |
|     6 | OFF            | This bit is set if the channel is not providing power to its output, regardless of the reason, including simply not being enabled. |
|     5 | VOUT OV        | An output overvoltage fault has occurred.                                                                                          |
|     4 | IOUT OC        | An output overcurrent fault has occurred.                                                                                          |
|     3 | Unsupported    | Not supported (device returns 0).                                                                                                  |
|     2 | TEMPERATURE    | A temperature fault or warning has occurred.                                                                                       |
|     1 | CML            | A communication, memory, or logic fault has occurred.                                                                              |
|     0 | NONEOFTHEABOVE | A fault or warning not listed in Bits[7:1] has occurred.                                                                           |

## STATUS\_WORD

The  STATUS\_WORD command returns a two-byte summary of the channel fault condition. The low byte of the STATUS\_WORD command is the same as the STATUS\_BYTE command. Bit 7 can be cleared by writing a 1 to its position.

## Table 45. STATUS\_WORD Contents

| BITS   | NAME         | DESCRIPTION                                                          |
|--------|--------------|----------------------------------------------------------------------|
| 15     | VOUT         | An output voltage fault or warning has occurred.                     |
| 14     | IOUT         | An output current fault or warning has occurred.                     |
| 13     | INPUT        | An input voltage fault or warning has occurred.                      |
| 12     | MFR_SPECIFIC | A fault or warning specific to the LT7176/LT7176-1 has occurred.     |
| 11     | POWERNOTGOOD | This bit is set when the LT7176/LT7176-1 is forcing the PGOODpinlow. |
| [10:8] | Unsupported  | Not supported (device returns 0).                                    |

## STATUS\_VOUT

The STATUS\_VOUT command returns one byte of V OUT status information. An individual bit can be cleared by writing a 1 to its position.

## Table 46. STATUS\_VOUT Contents

|   BITS | NAME            | DESCRIPTION                                                       |
|--------|-----------------|-------------------------------------------------------------------|
|      7 | VOUT OVFAULT    | V OUT overvoltage fault.                                          |
|      6 | VOUT OVWARNING  | V OUT overvoltage warning.                                        |
|      5 | VOUT UV WARNING | V OUT undervoltage warning.                                       |
|      4 | VOUT UV FAULT   | V OUT undervoltage fault.                                         |
|      3 | VOUT MAXWARNING | Warning that the LT7176/LT7176-1 is commanded to exceed VOUT_MAX. |
|      2 | TON MAXFAULT    | TON_MAX fault.                                                    |
|      1 | TOFF MAXWARNING | TOFF_MAX warning.                                                 |
|      0 | Unsupported     | Not supported (device returns 0).                                 |

## STATUS\_IOUT

The STATUS\_IOUT command returns one byte of I OUT status information. An individual bit can be cleared by writing a 1 to its position.

## Table 47. STATUS\_IOUT Contents

| BIT   | NAME           | DESCRIPTION                       |
|-------|----------------|-----------------------------------|
| 7     | IOUT OCFAULT   | I OUT overcurrent fault.          |
| 6     | Unsupported    | Not supported (device returns 0). |
| 5     | IOUT OCWARNING | I OUT overcurrent warning.        |
| [4:0] | Unsupported    | Not supported (device returns 0). |

## STATUS\_INPUT

The STATUS\_INPUT command returns one byte of input voltage status information. An individual bit can be cleared by writing a 1 to its position.

## Table 48. STATUS\_INPUT Contents

|   BIT | NAME                          | DESCRIPTION                                        |
|-------|-------------------------------|----------------------------------------------------|
|     7 | VIN OVFAULT                   | V IN overvoltage fault.                            |
|     6 | Unsupported                   | Not supported (device returns 0).                  |
|     5 | VIN UV WARNING                | V IN undervoltage warning.                         |
|     4 | Unsupported                   | Not supported (device returns 0).                  |
|     3 | UNIT OFF FOR INSUFFICIENT VIN | The unit is off due to insufficient input voltage. |
|     2 | Unsupported                   | Not supported (device returns 0).                  |
|     1 | Unsupported                   | Not supported (device returns 0).                  |
|     0 | Unsupported                   | Not supported (device returns 0).                  |

## STATUS\_TEMPERATURE

The  STATUS\_TEMPERATURE command returns one byte of  sensed internal  temperature  status  information.  An individual bit can be cleared by writing a 1 to its position.

## Table 49. STATUS\_TEMPERATURE Contents

| BIT   | NAME        | DESCRIPTION                       |
|-------|-------------|-----------------------------------|
| 7     | OT FAULT    | Internal overtemperature fault.   |
| 6     | OT WARNING  | Internal overtemperature warning. |
| [5:0] | Unsupported | Not supported (device returns 0). |

## STATUS\_CML

The  STATUS\_CML  command  returns  one  byte  of  status  information  regarding  PMBus  communication,  internal memory, and logic. An individual bit can be cleared by writing a 1 to its position.

## Table 50. STATUS\_CML Contents

|   BIT | DESCRIPTION                             |
|-------|-----------------------------------------|
|     7 | Invalid or unsupported commandreceived. |
|     6 | Invalid or unsupported data received.   |
|     5 | Packet error check failed.              |
|     4 | Not supported (device returns 0).       |
|     3 | Not supported (device returns 0).       |
|     2 | Not supported (device returns 0).       |
|     1 | Other communication fault.              |
|     0 | Other memoryor logic fault.             |

## STATUS\_MFR\_SPECIFIC

The STATUS\_MFR\_SPECIFIC command returns one byte with the manufacturer-specific status information. Bit 4 and Bit 5 are not page-specific. An individual bit can be cleared by writing a 1 to its position.

## Table 51. STATUS\_MFR\_SPECIFIC Contents

|   BIT | DESCRIPTION                                                                                               |
|-------|-----------------------------------------------------------------------------------------------------------|
|     7 | V OUT turned on when the output voltage was above the discharge threshold.                                |
|     6 | Pin configuration fault (see the MFR_PIN_CONFIG_STATUS section for more information).                     |
|     5 | NVMfault. Either the CRC does not match, or error correction indicates an uncorrectable error.            |
|     4 | Sync stuck low while SYNCpin is configured as a clock output (MFR_SYNC_CONFIG_LT7176, Bit 0 is set to 1). |
|     3 | Not supported (device returns 0).                                                                         |
|     2 | Not supported (device returns 0).                                                                         |
|     1 | Not supported (device returns 0).                                                                         |
|     0 | FAULT pin pulled low by external device.                                                                  |

## MFR\_PIN\_CONFIG\_STATUS

During initialization, the LT7176/LT7176-1 checks for various invalid pin configurations. If a pin configuration fault is detected, the LT7176/LT7176-1 pulls down the PGOOD pin and sets Bit 6 of STATUS\_MFR\_SPECIFIC. The regulator outputs are also locked off until the LT7176/LT7176-1 are reset. The MFR\_PIN\_CONFIG\_STATUS commands return one read-only byte indicating what type of pin configuration fault has been detected.

Table 52. MFR\_PIN\_CONFIG\_STATUS Bit Descriptions

| BIT   | DESCRIPTION                                                                                                                                                                                                                                                                                                                         |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7     | A frequency of less than 300 kHz is detected on the SYNC pin during initialization. Thismay occur if a higher-frequency clock starts during the initialization process. If an external clock is to be applied to the SYNC pin, it must start before the LT7176/LT7176-1 initialization begins, or after initialization is complete. |
| [6:1] | Not supported (device returns 0).                                                                                                                                                                                                                                                                                                   |
| 0     | The device is set for polyphase follower (MFR_CHAN_CONFIG_LT7176 bit 8 set high), while internal compensation is selected (I TH pin tied high).                                                                                                                                                                                     |

## MFR\_PADS\_LT7176

The read-only MFR\_PADS\_LT7176 command returns the digital status of the listed pins.

## Table 53. MFR\_PADS\_LT7176 Bit Descriptions

| BIT     | DESCRIPTION                       |
|---------|-----------------------------------|
| [15:10] | Not supported (device returns 0). |
| 9       | I TH is tied high externally.     |
| 8       | Sync input clock active.          |
| 7       | WP                                |
| 6       | Device driving ALERT low.         |
| 5       | ALERT                             |
| 4       | Device driving PGOODlow.          |
| 3       | PGOOD.                            |
| 2       | RUN.                              |
| 1       | Device driving FAULT low.         |
| 0       | FAULT                             |

## MFR\_COMMON

The MFR\_COMMON command contains bits that are common to all Analog Devices digital power and telemetry products. This command cannot cause the ALERT pin to be asserted.

Table 54. MFR\_COMMON Bit Description

|   BIT | DESCRIPTION                    |
|-------|--------------------------------|
|     7 | Chip is not driving ALERT low. |
|     6 | Chip is not busy.              |
|     5 | Calculations not pending.      |
|     4 | Reserved (device returns 1).   |
|     3 | Reserved (device returns 0).   |
|     2 | Reserved (device returns 0).   |
|     1 | SHARE_CLK timeout.             |
|     0 | WPpinstatus.                   |

## MFR\_CHANNEL\_STATE

The MFR\_CHANNEL\_STATE command returns the state of the channel.

## Table 55. MFR\_CHANNEL\_STATE Values

| VALUE   | DESCRIPTION                     |
|---------|---------------------------------|
| 0, 7    | Off.                            |
| 2       | Waiting for TON_DELAY.          |
| 3       | Power-on ramp up (TON_RISE).    |
| 4, 5    | On.                             |
| 6       | Waiting for TOFF_DELAY.         |
| 8       | Power-off ramp down(TOFF_FALL). |

## Telemetry

## Table 56. Telemetry Commands

| COMMANDNAME            | CODE   | DESCRIPTION                       | TYPE      | UNIT1   | NVM   | DEFAULT VALUE 1   |
|------------------------|--------|-----------------------------------|-----------|---------|-------|-------------------|
| IOUT_CAL_OFFSET        | 0x39   | Offset for READ_IOUT.             | R/W word  | A       | Yes   | 0.32              |
| READ_VIN               | 0x88   | Measured input supply voltage.    | R word    | V       | No    | N/A               |
| READ_VOUT              | 0x8B   | Measured output voltage.          | R word    | V       | No    | N/A               |
| READ_IOUT              | 0x8C   | Measured output current.          | R word    | A       | No    | N/A               |
| READ_TEMPERATURE_1     | 0x8D   | Measured internal temperature.    | R word    | °C      | No    | N/A               |
| READ_FREQUENCY         | 0x95   | Frequency of the top gate.        | R word    | kHz     | No    | N/A               |
| MFR_READ_EXTVCC        | 0xCD   | Measured EXTV CC pin voltage.     | R word    | V       | No    | N/A               |
| MFR_READ_ITH           | 0xCE   | Measured ITH pin voltage.         | R word    | V       | No    | N/A               |
| MFR_READ_ASEL          | 0xD3   | Read the ASEL pin resistor value. | R word    | kΩ      | No    | N/A               |
| MFR_IOUT_PEAK          | 0xD7   | Maximum READ_IOUT.                | R word    | A       | No    | N/A               |
| MFR_ADC_CONTROL_LT7176 | 0xD8   | ADC configuration.                | R/W byte  | N/A     | Yes   | 0x06              |
| MFR_VOUT_PEAK          | 0xDD   | Maximum READ_VOUT.                | R word    | V       | No    | N/A               |
| MFR_VIN_PEAK           | 0xDE   | Maximum READ_VIN.                 | R word    | V       | No    | N/A               |
| MFR_TEMPERATURE_1_PEAK | 0xDF   | Maximum READ_TEMPERATURE_1.       | R word    | °C      | No    | N/A               |
| MFR_READ_PWM_CFG       | 0xE0   | Measured PWM_CFGresistor value.   | R word    | kΩ      | No    | N/A               |
| MFR_READ_VOUT_CFG      | 0xE1   | Measured VOUT_CFG resistor value. | R word    | kΩ      | No    | N/A               |
| MFR_CLEAR_PEAKS        | 0xE3   | Clears all recorded peak values.  | Send byte | N/A     | No    | N/A               |

## IOUT\_CAL\_OFFSET

The IOUT\_CAL\_OFFSET command sets an offset for READ\_IOUT in amperes. See the READ\_IOUT section for details. This command uses a half-precision floating-point format.

## READ\_VIN

The READ\_VIN command returns the measured input voltage.

This command uses a half-precision floating-point format.

## READ\_VOUT

The READ\_VOUT command returns the measured output voltage.

This command uses a half-precision floating-point format.

## READ\_IOUT

The READ\_IOUT command returns the output current, averaged over the measurement time determined by the IOUT aperture control. See the MFR\_ADC\_CONTROL\_LT717 section for details about the IOUT aperture control.

The  value  returned  by  READ\_IOUT  is  the  measured  output  current  offset  by  the  value  of  IOUT\_CAL\_OFFSET.  A dominant source of READ\_IOUT error is systematic offset, which is largely a function of switching frequency, input voltage, output voltage, and inductor selection. To improve the accuracy of READ\_IOUT, record the value reported by  READ\_IOUT  in  typical  application  conditions  at  zero  load  with  IOUT\_CAL\_OFFSET  set  to  zero.  Then  write IOUT\_CAL\_OFFSET to the negation of the recorded READ\_IOUT value at no load. This value of IOUT\_CAL\_OFFSET can be systematically stored in NVM for all devices and does not need to be calibrated for every LT7176/LT7176-1 individually.

The READ\_IOUT command uses a half-precision floating point format.

## READ\_TEMPERATURE\_1

The READ\_TEMPERATURE\_1 command returns the internal device temperature.

This command uses a half-precision floating-point format.

## READ\_FREQUENCY

The READ\_FREQUENCY command returns the top switch switching frequency in kilohertz (kHz).

This command uses a half-precision floating-point format.

## MFR\_READ\_EXTVCC

The MFR\_READ\_EXTVCC command returns the measured voltage on the EXTVCC pin.

This command is updated only when Bit 0 of MFR\_ADC\_CONTROL\_LT7176 is set to 1 to enable debug telemetry measurements.

The MFR\_READ\_EXTVCC command uses a half-precision floating point format.

## MFR\_READ\_ITH

The MFR\_READ\_ITH command returns the measured voltage at the switching regulator compensation point.

This command is updated only when Bit 0 of MFR\_ADC\_CONTROL\_LT7176 is set to 1 to enable debug telemetry measurements.

The reported voltage corresponds to the valley-current operating point, scaled by the current-sense transconductance (ΔI OUT /ΔVI TH ). Refer to the LT7176/LT7176-1 data sheet for more  information on the programmable current limit. The compensation point voltage is measured differentially with respect to the internal zero valley current reference voltage of approximately 935 mV.

The MFR\_READ\_ITH command uses a half-precision floating point format.

## MFR\_READ\_ASEL

The MFR\_READ\_ASEL command returns the measured ASEL pin resistor value.

If the ASEL pin is left floating, MFR\_READ\_ASEL returns a large value.

The MFR\_READ\_ASEL command uses a half-precision floating-point format.

## MFR\_IOUT\_PEAK

The MFR\_IOUT\_PEAK command reports the highest output current measured.

This command is cleared using the MFR\_CLEAR\_PEAKS command.

The MFR\_IOUT\_PEAK command uses a half-precision floating-point format.

## MFR\_ADC\_CONTROL\_LT7176

The MFR\_ADC\_CONTROL\_LT7176 command controls adjustable features of the telemetry loop.

Bit 4 enables the IOUT scope mode, where the output current measurement is updated more frequently. The update rate for all other measurements is decreased when the IOUT scope mode is enabled.

Bits[3:2] select the aperture time for the IOUT measurement. A longer aperture time provides more precise output current measurements but increases the time required for the IOUT measurement and the overall telemetry loop. A shorter aperture time provides a faster measurement but with less precision.

Table 57. Mode, IOUT Oversample Ratio (OSR), and Update Times for MFR\_ADC\_CONTROL\_LT7176

| MODE        |   I OUT OSR |   UPDATETIMEFORIOUT MEASUREMENT(ms) |   UPDATETIMEFOROTHER MEASUREMENTS (ms) |
|-------------|-------------|-------------------------------------|----------------------------------------|
| Standard    |           3 |                                 8.1 |                                    8.1 |
| Standard    |           2 |                                 6.3 |                                    6.3 |
| Standard    |           1 |                                 5.5 |                                    5.5 |
| Standard    |           0 |                                 5.1 |                                    5.1 |
| I OUT Scope |           3 |                                 5   |                                   19.4 |
| I OUT Scope |           2 |                                 3.3 |                                   12.4 |
| I OUT Scope |           1 |                                 2.5 |                                    9   |
| I OUT Scope |           0 |                                 2.1 |                                    7.2 |

Bit 1 enables lower-frequency telemetry measurements to reduce the input supply quiescent current. When this bit is set, the telemetry runs with a typical period of 110ms (compared to a typical period of 5.5ms when this bit is zero).

Bit 0 enables the debug telemetry measurements: MFR\_READ\_EXTVCC and MFR\_READ\_ITH. When this bit is 1, the other measurements update at a slower rate.

## Table 58. MFR\_ADC\_CONTROL\_LT7176 Bit Descriptions

| BITS   |   DEFAULT VALUE | DESCRIPTION                                                                                      |
|--------|-----------------|--------------------------------------------------------------------------------------------------|
| 4      |               0 | Enable scope modefor the I OUT measurement.                                                      |
| [3:2]  |               1 | IOUT measurement aperture time.                                                                  |
| 1      |               1 | Enable low-frequency telemetry (110ms typical period, 2mAtypical supply current reduction).      |
| 0      |               0 | 0 = Standard telemetry measurements. 1 = Debug telemetry measurements: standard + EXTV CC + ITH. |

## MFR\_VOUT\_PEAK

The MFR\_VOUT\_PEAK command reports the highest output voltage measured.

This command is cleared using the MFR\_CLEAR\_PEAKS command.

The MFR\_VOUT\_PEAK command uses a half-precision floating-point format.

## MFR\_VIN\_PEAK

The MFR\_VIN\_PEAK command reports the highest input voltage measured.

This command is cleared using the MFR\_CLEAR\_PEAKS command.

The MFR\_VIN\_PEAK command uses a half-precision floating-point format.

## MFR\_TEMPERATURE\_1\_PEAK

The MFR\_TEMPERATURE\_1\_PEAK command reports the highest internal temperature measured.

This command is cleared using the MFR\_CLEAR\_PEAKS command.

The MFR\_TEMPERATURE\_1\_PEAK command uses a half-precision floating-point format.

## MFR\_READ\_PWM\_CFG

The MFR\_READ\_PWM\_CFG command returns the measured PWM\_CFG pin resistor value.

If the PWM\_CFG pin is left floating or is tied to VDD18, MFR\_READ\_PWM\_CFG returns a large value.

If Bit 6 of MFR\_CONFIG\_ALL\_LT7176 is set to disable the resistor configuration during initialization, MFR\_READ\_PWM\_CFG returns 0.

The MFR\_READ\_PWM\_CFG command uses a half-precision floating point format.

## MFR\_READ\_VOUT\_CFG

The MFR\_READ\_VOUT\_CFG command returns the measured VOUT\_CFG pin resistor value.

If the VOUT\_CFG pin is left floating or is tied to VDD18, MFR\_READ\_VOUT\_CFG returns a large value. If Bit 6 of MFR\_CONFIG\_ALL\_LT7176 is set to disable the resistor configuration during initialization, MFR\_READ\_VOUT\_CFG returns 0.

The MFR\_READ\_VOUT\_CFG command uses a half-precision floating point format.

## MFR\_CLEAR\_PEAKS

The MFR\_CLEAR\_PEAKS command clears the MFR\_x\_PEAK data values. These values are also cleared at reset or power-up.

## NVM Commands

Most NVM access commands complete in milliseconds.

## Store/Restore

Table 59. Store/Restore Commands 1

| COMMAND                       | CODE   | DESCRIPTION                                                             | TYPE      | NVM   | DEFAULT VALUE 1   |
|-------------------------------|--------|-------------------------------------------------------------------------|-----------|-------|-------------------|
| STORE_USER_ALL                | 0x15   | Stores user operating memoryto NVM. It can only be written three times. | Send byte | No    | N/A               |
| RESTORE_USER_ALL              | 0x16   | Restores user operating memoryfrom NVM.                                 | Send byte | No    | N/A               |
| MFR_COMPARE_USER_ALL          | 0xF0   | Compares currentcommand contents with NVM.                              | Send byte | No    | N/A               |
| MFR_USER_DATA_00              | 0xC9   | NVMwordavailable for the user.                                          | R/W word  | Yes   | 0x0000            |
| MFR_USER_DATA_01              | 0xCA   | NVMwordavailable for the user.                                          | R/W word  | Yes   | 0x0000            |
| MFR_DISABLE_OUTPUT            | 0xFB   | Disables regulator outputs until reset.                                 | R/W byte  | No    | 0x00              |
| MFR_NVM_USER_WRITES_REMAINING | 0xBE   | Number of STORE_USER_ALL writes remaining.                              | R byte    | No    | N/A               |
| MFR_NVM_USER_WP               | 0xFC   | Disables commands that write user NVM.                                  | R/W byte  | Yes   | 0x00              |

## STORE\_USER\_ALL

The STORE\_USER\_ALL command instructs the LT7176/LT7176-1 to copy the contents of the operating memory to nonvolatile memory. All commands designated as NVM backed commands are stored in nonvolatile memory by the STORE\_USER\_ALL command.

STORE\_USER\_ALL may only be written three times during the life of the LT7176/LT7176-1.

Throughout the STORE\_USER\_ALL operation, the device junction temperature must be maintained between -40°C and 125°C, and V IN must be maintained at more than 9.6V.

If a nonvolatile memory write fails, Bit 5 is set in STATUS\_MFR\_SPECIFIC, indicating that a nonvolatile memory fault has occurred. If the LT7176/LT7176-1 are reset or bias power is removed while a nonvolatile memory fault is present, the device address is set to 0x7C on the next power-up.

Reading the STORE\_USER\_ALL command also instructs the LT7176/LT7176-1 to copy the contents of the operating memory to nonvolatile memory.

## RESTORE\_USER\_ALL

The RESTORE\_USER\_ALL command provides a means by which the user can perform a reset of the LT7176/LT71761. Reading the RESTORE\_USER\_ALL command also causes the LT7176/LT7176-1 to reset.

## MFR\_COMPARE\_USER\_ALL

The MFR\_COMPARE\_USER\_ALL command instructs the LT7176/LT7176-1 to compare the current command contents with  what  is  stored  in  nonvolatile  memory.  If  the  compare  operation  detects  differences,  a  CML  Bit  0  fault  is generated.

Reading  the  MFR\_COMPARE\_USER\_ALL  command  also  instructs  the  LT7176/LT7176-1  to  compare  the  current command contents with what is stored in nonvolatile memory.

## MFR\_USER\_DATA\_00 and MFR\_USER\_DATA\_01

The MFR\_USER\_DATA\_xx commands can be used by the user to store any data. Each of these commands stores one 16-bit word. This data is written to the NVM when the STORE\_USER\_ALL command is written.

## MFR\_DISABLE\_OUTPUT

When written to 0xFF, the MFR\_DISABLE\_OUTPUT command disables the regulator outputs until reset. The value of MFR\_DISABLE\_OUTPUT  is  not  stored  in  NVM,  allowing  anything  to  be  programmed  into  ON\_OFF\_CONFIG, OPERATION,  and  so  forth,  without  powering  up  the  output.  MFR\_DISABLE\_OUTPUT  also  allows  all  NVM  stored commands to be  configured  and  written  to  NVM  with  STORE\_USER\_ALL  without  powering  up  the  output.  The MFR\_DISABLE\_OUTPUT command can be read to determine the state of the output disable function.

## MFR\_NVM\_USER\_WRITES\_REMAINING

When read, MFR\_NVM\_USER\_WRITES\_REMAINING returns the number of times STORE\_USER\_ALL can be written.

## MFR\_NVM\_USER\_WP

When written to 0xFF, the MFR\_NVM\_USER\_WP command disables the commands that can be used to write to the user NVM space: STORE\_USER\_ALL and MFR\_NVM\_DATA writes. The MFR\_NVM\_USER\_WP command can only be written to 0xFF.

## NOTES

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

## REVISION HISTORY

|   REVISON NUMBER | REVISION DATE   | DESCRIPTION     | PAGE NUMBER   |
|------------------|-----------------|-----------------|---------------|
|                0 | 12/2025         | Initial Release | -             |

ALL  INFORMATION  CONTAINED  HEREIN  IS  PROVIDED  'AS  IS'  WITHOUT  REPRESENTATION  OR  WARRANTY.  NO  RESPONSIBILITY  IS ASSUMED BY ANALOG DEVICES FOR ITS USE, NOR FOR ANY INFRINGEMENTS OF PATENTS OR OTHER RIGHTS OF THIRD PARTIES THAT MAY  RESULT  FROM  ITS  USE.  SPECIFICATIONS  ARE  SUBJECT  TO  CHANGE  WITHOUT  NOTICE.  NO  LICENCE,  EITHER  EXPRESSED  OR IMPLIED, IS GRANTED UNDER ANY ADI PATENT RIGHT, COPYRIGHT, MASK WORK RIGHT, OR ANY OTHER ADI INTELLECTUAL PROPERTY RIGHT RELATING TO ANY COMBINATION, MACHINE, OR PROCESS, IN WHICH ADI PRODUCTS OR SERVICES ARE USED. TRADEMARKS AND REGISTERED TRADEMARKS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS. ALL ANALOG DEVICES PRODUCTS CONTAINED HEREIN ARE SUBJECT TO RELEASE AND AVAILABILITY.