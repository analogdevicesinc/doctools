<!-- lastmod 2022-08-03 -->
## General Description

The MAX5915 evaluation kit (EV kit) is a fully assembled and tested surface-mount dual hot-swap controller circuit board for two PCI 2.2 server line cards. The circuit uses a MAX5915 IC in a 28-pin TSSOP package. The EV kit provides independent power control for the +3.3V, +5V, ±12V, and +3.3V auxiliary outputs to the PCI 2.2 connectors (A/B channels). The EV kit demonstrates the MAX5915 IC's overcurrent shutdown, output undervoltage monitoring, power-on reset (POR), and fault-reporting capabilities for channels A and B.

The MAX5915 IC controls the two separate external Nchannel MOSFETs for the +5V and +3.3V outputs, respectively. The MAX5915 has internal MOSFETs that control the ±12V and +3.3V auxiliary outputs of both channels. Isolation switches are provided for both channels' +3.3V and +3.3V auxiliary supplies and to enable/disable both channels independently.

The EV kit can also be configured to demonstrate a dual hot-swap design without using the PCI 3.3V/64-bit and 5V/64-bit PCI connectors.

| DESIGNATION         |   QTY | DESCRIPTION                                                             |
|---------------------|-------|-------------------------------------------------------------------------|
| C1, C3, C5, C7, C9  |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01  |
| C2, C4, C6, C8, C10 |     5 | 4.7µF ±20%, 16V X5R ceramic capacitors (1206) Taiyo Yuden EMK316BJ475ML |
| C11-C16             |     6 | 47µF ±20%, 16V tantalum capacitors (C case) AVX TPSC476M016R0350        |
| C17-C20             |     4 | 470µF ±10%, 6.3V tantalum capacitors (X case) Kemet T510X477K006AS      |
| J1, J2              |     2 | 6-pin headers                                                           |

<!-- image -->

## Features

- ♦ Demonstrates PCI 2.2 Dual Hot-Swap Design (3.3V/5V PCI Card Designs)
- ♦ Independent Output Controls Provide for Each Channel
- +3.3V and Up to 7.6A (Adjustable)
- +5V and Up to 5A (Adjustable)
- +12V and Up to 0.5A
- -12V and Up to 0.1A
- +3.3V AUX and Up to 0.375A
- ♦ Evaluates Hot Swapping 3.3V/64-Bit and 5V/64-Bit PCI Line Cards
- ♦ Demonstrates Overcurrent Protection with Status Report
- ♦ Monitors Output Undervoltage for +3.3V, +5V, ±12V, and +3.3V AUX with Status Report
- ♦ Independent 3.3V AUX Output with Separate ON/OFF Control
- ♦ Latched After-Fault Conditions (+3.3V, +5V, ±12V)
- ♦ Power-On Reset and Fault Status Reporting
- ♦ Independent On/Off Controls for Channels A/B
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5915EVKIT | 0°C to +70°C | 28 TSSOP     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| J3            |     1 | PCI 5V/64-bit connector Amp 145166-4                                           |
| J4            |     1 | PCI 3.3V/64-bit connector Amp 145165-4                                         |
| J5-J8         |     4 | Uninsulated banana jacks                                                       |
| JU1-JU10      |    10 | 2-pin headers                                                                  |
| N1-N4         |     4 | 30V, 13A N-channel MOSFETs (8-pin SO) Fairchild FDS6670A                       |
| R1-R4         |     4 | 0.005 Ω ±1%, 0.25W sense resistors (1206) Dale-Vishay WSL1206 0.005 Ω ± 1% B43 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX5915 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Dale/Vishay | 402-564-3131 | 402-563-6296 | www.vishay.com        |
| Fairchild   | 888-522-5372 | -            | www.fairchildsemi.com |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |

Note: Please indicate that you are using the MAX5915 when contacting these component suppliers.

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                |
|---------------|-------|----------------------------|
| R5-R11        |     7 | 10k Ω ±5% resistors (0805) |
| SW1-SW4       |     4 | SPST DIP switches          |
| SW5           |     1 | SPDT slide switch          |
| SW6           |     1 | DPDT toggle switch         |
| U1            |     1 | MAX5915EUI (28-pin TSSOP)  |
| None          |    10 | Shunts (JU1-JU10)          |
| None          |     1 | MAX5915 data sheet         |
| None          |     1 | MAX5915 EV kit data sheet  |
| None          |     6 | Rubber bumpers             |

## Quick Start

## Required Equipment

One each of the following DC power supplies is required:

- +3.3V, 20A
- +5V, 10A
- +12V, 3A
- -12V, 0.25A

The +3.3V power supply can be used to power the main +3.3V and +3.3V\_AUX inputs, which are independently switchable (SW5, SW6).

The MAX5915 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

Note: The banana leads connecting the +3.3V and +5V power supplies to the EV kit must be very short (&lt; 6in long).

## MAX5915 Configuration A/B Channel Outputs

- 1) Verify that shunts are on jumpers JU1-JU5 (channel A).
- 2) Verify that shunts are on jumpers JU6-JU10 (channel B).
- 3) Set switches SW1 (ON\_A) and SW2 (AUX\_ONA) to the OFF position (channel A).
- 4) Set switches SW3 (ON\_B) and SW4 (AUX\_ONB) to the OFF position (channel B).
- 5) Set switches SW5 (+3.3VAUXIN) and SW6 (+3.3V) to the OFF position.
- 6) Utilizing  very  short  20A  rated  banana  leads  (&lt;  6in long), connect the +3.3VDC power supply to the +3.3V\_VIN banana jack. Utilizing very short 20Arated banana leads (&lt; 6in long), connect the supply ground to the GND banana jack.
- 7) Utilizing  very  short  10A-rated  banana  leads  (&lt;  6in long), connect the +5VDC power supply to the +5V\_VIN banana jack. Utilizing very short 10Arated banana leads (&lt; 6in long), connect the supply ground to the GND banana jack.
- 8) Connect the +12VDC and -12VDC power supplies to  the  +12V\_VIN and -12V\_VIN pads, respectively. Connect the +12VDC and -12VDC power supplies to the respective GND pad on the EV kit.
- 9) Connect a voltmeter to the +3.3V\_A and GND pads.
- 10) Turn on all the power supplies in any sequence.
- 11) Turn switches SW5 and SW6 to the ON position to provide power to the +3.3V\_AUX inputs and main +3.3V inputs, respectively.
- 12) Sliding switches SW1 and SW2 to the ON position enables channel A on MAX5915 EV kit dual hotswap controller.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 13) Sliding switches SW3 and SW4 to the ON position enables channel B on the MAX5915 EV kit dual hotswap controller.
- 14) Verify that the voltage at the following pads is as shown below:
3. +3.3V\_A, +3.3V\_B = +3.3V
4. +5V\_A, +5V\_B = +5V
5. +12V\_A, +12V\_B = +12V
6. -12V\_A, -12V\_B = -12V
7. +3.3V\_AUX\_A, +3.3V\_AUX\_B = +3.3V

## Detailed Description

The MAX5915 EV kit demonstrates a PCI 2.2 dual hotswap controller circuit design. Two PCI channels (A and B) are provided to evaluate 5V/64-bit and 3.3V/64bit line card designs independently. The EV kit can also be used to evaluate 32-bit PCI line cards. The EV kit uses a MAX5915 IC in a 28-pin TSSOP package to control output power and monitor faults.

The MAX5915 IC controls each channel's output power independently. External N-channel MOSFETs are used to control power to the +5V and +3.3V outputs of each channel. Current-sensing resistors are used for the +5V and +3.3V outputs of each channel. MOSFETs inside the  MAX5915 IC control the ±12V and +3.3V auxiliary outputs of each channel.

Switches to isolate the +3.3V (SW6) and +3.3V auxiliary (SW5) power-supply inputs are provided. Slide switches are also provided to enable/disable each channel's main (SW1, SW3) and auxiliary (SW2, SW4) output independently. The enable/disable switches can provide a reset function for the respective channel, which latches off during a fault.

If an overcurrent or undervoltage fault persists on either channel, the MAX5915 shuts down the respective channel.  The  fault  is  reported  to  the  channel's P\_GOOD\_X pad where X is A or B, which has the fault. The MAX5915's open-drain FAULT\_X pin pulls down

## Table 1. Channel A Switch Functions

| SWITCH   | SWITCH STATE   | MAX5915 PIN CONNECTION   | MAX5915 OPERATION                         |
|----------|----------------|--------------------------|-------------------------------------------|
| SW1      | ON (closed)    | ON_A pin pulled high     | Enable channel A main outputs             |
| SW1      | OFF (open)     | ON_A pin pulled low      | Disable channel A main outputs            |
| SW2      | ON (closed)    | AUX_ONA pin pulled high  | Enable channel A +3.3V auxiliary outputs  |
| SW2      | OFF (open)     | AUX_ONA pin pulled low   | Disable channel A +3.3V auxiliary outputs |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

the channel's P\_GOOD\_X pad during a fault condition. A pad (V\_PULL) is provided for the user to connect a power supply (5.5V max) to the pullup resistor and P\_GOOD\_X pad. The P\_GOOD\_X pad also provides POR status during power-up.

The user can evaluate a 3.3V/64-bit and 5V/64-bit PCI line card simultaneously using the EV kit's PCI 2.2 compliant connectors. The EV kit can also be reconfigured to  demonstrate a dual hot-swap design without using the  PCI  3.3V/64-bit  and  5V/64-bit  PCI  connectors  and using the on-board capacitors as a 'capacitive' load.

For evaluating external DC loads, the cables connecting the +3.3V and +5V outputs to the external DC load must be rated for at least 10A and be shorter than 12in long. Additionally, current-sense resistors R1-R4 are configured for the maximum allowable output current on the +3.3V and +5V outputs. The resistors can be reconfigured for lower output currents only.

## Switch and Jumper Selection

Several switch and jumper selections in Tables 1-5 display the functions provided by the MAX5915 EV kit.

## Channel A Enable/Disable Switches

The MAX5915 EV kit features switches to enable/disable the channel A main outputs and auxiliary +3.3V output. The switches can also be used to reset the EV kit's  respective output. Table 1 lists the various switch options.

## Channel B Enable/Disable Switches

The MAX5915 EV kit features switches to enable/disable the channel B main outputs and auxiliary +3.3V output. The switches can also be used to reset the EV kit's  respective output. Table 2 lists the various switch options.

## +3.3V Supply Isolation Switches

The MAX5915 EV kit features switches to isolate the +3.3V main supply (+3.3V) from the +3.3V auxiliary

## MAX5915 Evaluation Kit

supply (+3.3VAUXIN) for both channels. Table 3 lists the various switch options.

## Channel A Capacitance Load (5V/64-Bit PCI Line Card)

The MAX5915 EV kit features several jumpers to select what supplies the 'capacitive' load for the controller to regulate during evaluation. A 5V/64-bit PCI line card plugged into the PCI +3.3V/64-bit connector (J3) or the EV kit's capacitors can supply this load. Jumpers JU1-JU5 are provided to disable/enable this feature independent of the channel B selection. Table 4 lists the various jumper options.

Table 2. Channel B Switch Functions

| SWITCH   | SWITCH STATE   | MAX5915 PIN CONNECTION   | MAX5915 OPERATION                         |
|----------|----------------|--------------------------|-------------------------------------------|
| SW3      | ON (closed)    | ON_B pin pulled high     | Enable channel B main outputs             |
| SW3      | OFF (open)     | ON_B pin pulled low      | Disable channel B main outputs            |
| SW4      | ON (closed)    | AUX_ONB pin pulled high  | Enable channel B +3.3V auxiliary outputs  |
| SW4      | OFF (open)     | AUX_ONB pin pulled low   | Disable channel B +3.3V auxiliary outputs |

Table 3. +3.3V Switch Functions

| SWITCH   | SWITCH STATE   | MAX5915 PIN CONNECTION            | MAX5915 OPERATION                           |
|----------|----------------|-----------------------------------|---------------------------------------------|
| SW5      | ON (closed)    | +3.3VAUXIN                        | Supply +3.3V to channel A/B auxiliary input |
| SW5      | OFF (open)     | +3.3VAUXIN                        | 0V at channel A/B auxiliary inputs          |
| SW6      | ON (closed)    | Supply +3.3V to MOSFETs N2 and N4 | Supply +3.3V to external MOSFETs            |
| SW6      | OFF (open)     | Supply 0V to MOSFETs N2 and N4    | Disconnect supply to external MOSFETs       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Channel B Capacitance Load (3.3V/64-Bit PCI Line Card)

The MAX5915 EV kit features several jumpers to select what supplies the 'capacitive' load for the controller to regulate during evaluation. A 3.3V/64-bit PCI line card plugged into the PCI 3.3V/64-bit connector (J4) or the EV kit's capacitors can supply this load. Jumpers JU6-JU10 are provided to disable/enable this feature independent of the channel A selection. Table 5 lists the various jumper options.

## MAX5915 Evaluation Kit

Table 4. Channel A Jumpers JU1-JU5 Functions

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                  | MAX5915 OPERATION                 |
|----------|------------------|---------------------------------|-----------------------------------|
| JU1      | Installed        | C11 connected to +3.3VAUXOA pin | C11 provides capacitance          |
| JU1      | None             | +3.3VAUXOA pin floating         | +5V PCI card supplies capacitance |
| JU2      | Installed        | C12 connected to +12VOA pin     | C12 provides capacitance          |
| JU2      | None             | +12VOA pin floating             | +5V PCI card supplies capacitance |
| JU3      | Installed        | C13 connected to -12VOA pin     | C13 provides capacitance          |
| JU3      | None             | -12VOA pin floating             | +5V PCI card supplies capacitance |
| JU4      | Installed        | C17 connected to +5V_A pad      | C17 provides capacitance          |
| JU4      | None             | +5V_A pad floating              | +5V PCI card supplies capacitance |
| JU5      | Installed        | C18 connected to +3.3V_A pad    | C18 provides capacitance          |
| JU5      | None             | +3.3_A pad floating             | +5V PCI card supplies capacitance |

Table 5. Channel B Jumpers JU6-JU10 Functions

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                  | MAX5915 OPERATION                   |
|----------|------------------|---------------------------------|-------------------------------------|
| JU6      | Installed        | C14 connected to +3.3VAUXOB pin | C14 provides capacitance            |
| JU6      | None             | +3.3VAUXOB pin floating         | +3.3V PCI card supplies capacitance |
| JU7      | Installed        | C15 connected to +12VOB pin     | C15 provides capacitance            |
| JU7      | None             | +12VOB pin floating             | +3.3V PCI card supplies capacitance |
| JU8      | Installed        | C16 connected to -12VOB pin     | C16 provides capacitance            |
| JU8      | None             | -12VOB pin floating             | +3.3V PCI card supplies capacitance |
| JU9      | Installed        | C19 connected to +5V_B pad      | C19 provides capacitance            |
| JU9      | None             | +5V_B pad floating              | +3.3V PCI card supplies capacitance |
| JU10     | Installed        | C20 connected to +3.3V_B pad    | C20 provides card capacitance       |
| JU10     | None             | +3.3_B pad floating             | +3.3V PCI card supplies capacitance |

## Control Modes

## Fault Resetting

The MAX5915 EV kit features two slide switches to reset a fault for each channel. The switch resets the EV kit and unlatches faults when toggled from ON to OFF.

<!-- image -->

See Table 1 for resetting channel A or Table 2 for channel  B.  Refer  to  the  MAX5915 data sheet for additional functions of the ON\_X pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

Figure 1. MAX5915 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

<!-- image -->

Figure 2. MAX5915 EV Kit Schematic, PCI Connectors

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

Figure 3. MAX5915 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX5915 EV Kit PC Board Layout-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

<!-- image -->

Figure 5. MAX5915 EV Kit PC Board Layout-Inner Layer, Ground Plane

<!-- image -->

Figure 6. MAX5915 EV Kit PC Board Layout-Inner Layer, Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5915 Evaluation Kit

Figure 7. MAX5915 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600