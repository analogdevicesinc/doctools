<!-- lastmod 2022-10-10 -->
<!-- image -->

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX548A/MAX549A/MAX550A serial, 8-bit voltageoutput digital-to-analog converters (DACs) operate from a single +2.5V to +5.5V supply. Their ±1LSB TUE specification is guaranteed over temperature. Operating current (supply current plus reference current) is typically 75µA per DAC with VDD = 2.5V. In shutdown, the DAC is  disconnected from the reference, reducing current drain to less than 1µA. The MAX548A/MAX549A allow each DAC to be shut down independently.

The 10MHz, 3-wire serial interface is compatible with SPI™/QSPI™ and Microwire™ interface standards. Double-buffered inputs provide flexibility when updating the DACs; the input and DAC registers can be updated individually or simultaneously.

The MAX548A is a dual DAC with an asynchronous load input; it uses VDD as the reference input. The MAX549A is a dual DAC with an external reference input.  The  MAX550A is a single DAC with an external reference input and an asynchronous load input.

The MAX548A/MAX549A/MAX550A's low power consumption and small µMAX and DIP packages make these devices ideal for portable and battery-powered applications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Battery-Powered Systems VCXO Control Comparator-Level Settings GaAs Amp Bias Control Digital Gain and Offset Control

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Selector Guide

| FEATURE                     | MAX548A   | MAX549A   | MAX550A   |
|-----------------------------|-----------|-----------|-----------|
| Number of DACs              | 2         | 2         | 1         |
| DAC Reference               | V DD      | External  | External  |
| Asynchronous Load DAC Input | √         | -         | √         |
| µMAX Package                | √         | √         | √         |

SPI and QSPI are trademarks of Motorola Inc. Microwire is a trademark of National Semiconductor Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +2.5V to +5.5V Single-Supply Operation
- ' ±1LSB (max) TUE
- ' Power-On Reset Clears All Registers to Zero
- ' Low Operating Current: 150µA (MAX548A/MAX549A, VREF = +2.5V) 75µA (MAX550A, VREF = +2.5V)
- ' 1µA Shutdown Mode
- ' 10MHz, 3-Wire Serial Interface Compatible with SPI/QSPI and Microwire
- ' µMAX Package-50% Smaller than 8-Pin SO
- ' Independent Shutdown of DACs (MAX548A/MAX549A)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE    | PIN-PACKAGE †   |
|-------------|----------------|-----------------|
| MAX548A CPA | 0°C to +70°C   | 8 Plastic DIP   |
| MAX548ACUA  | 0°C to +70°C   | 8 µMAX          |
| MAX548AC/D  | 0°C to +70°C   | Dice*           |
| MAX548AEPA  | -40°C to +85°C | 8 Plastic DIP   |
| MAX548AEUA  | -40°C to +85°C | 8 µMAX          |

## Ordering Information continued at end of data sheet.

*Dice are specified at TA = +25°C, DC parameters only. † Contact factory for availability of 8-pin SO package.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## ABSOLUTE MAXIMUM RATINGS

VDD, SCLK, DIN,

CS

,

LDAC

, OUT\_ to GND ...............-0.3V to 6V

REF to GND................................................-0.3V to (VDD + 0.3V)

Maximum Current (any pin) .............................................±50mA

Continuous Power Dissipation (TA = +70°C)

Plastic DIP (derate 9.09mW/°C above +70°C) .............727mW

µMAX (derate 4.10mW/°C above +70°C) .....................330mW

Operating Temperature Ranges

MAX5\_ \_AC\_ A.....................................................0°C to +70°C

MAX5\_ \_AE\_ A..................................................-40°C to +85°C

Storage Temperature Range.............................-65°C to +150°C

Lead Temperature (soldering, 10sec) .............................+300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VDD = +2.5V to +5.5V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                          | SYMBOL             | CONDITIONS                                |                      | MIN                | TYP                | MAX                | UNITS              |
|----------------------------------------------------|--------------------|-------------------------------------------|----------------------|--------------------|--------------------|--------------------|--------------------|
| STATIC PERFORMANCE                                 | STATIC PERFORMANCE | STATIC PERFORMANCE                        | STATIC PERFORMANCE   | STATIC PERFORMANCE | STATIC PERFORMANCE | STATIC PERFORMANCE | STATIC PERFORMANCE |
| Resolution                                         | N                  |                                           |                      | 8                  |                    |                    | Bits               |
| Differential Nonlinearity                          | DNL                | Guaranteed monotonic                      | MAX5_ _AEUA (Note 1) |                    |                    | ±0.9               | LSB                |
|                                                    | DNL                | Guaranteed monotonic                      | All others           |                    |                    | ±0.9               | LSB                |
| Total Unadjusted Error                             | TUE                |                                           | MAX5_ _AEUA (Note 1) |                    |                    | ±1                 | LSB                |
|                                                    | TUE                |                                           | All others           |                    |                    | ±1                 | LSB                |
| Zero-Code Error                                    | ZCE                |                                           |                      |                    |                    | ±1                 | LSB                |
| Full-Scale Error                                   | FSE                |                                           |                      |                    |                    | ±1                 | LSB                |
| REFERENCE INPUT                                    | REFERENCE INPUT    | REFERENCE INPUT                           | REFERENCE INPUT      | REFERENCE INPUT    | REFERENCE INPUT    | REFERENCE INPUT    | REFERENCE INPUT    |
| Reference Input Voltage Range                      | V REF              | MAX549A/MAX550A for specified performance |                      | 2.5                |                    | V DD               | V                  |
| Reference Input Resistance DAC Code = 55 Hex (Note | R REF              | MAX549A                                   |                      |                    | 16.7               |                    | k Ω                |
| 2)                                                 | R REF              | MAX550A                                   |                      |                    | 33.3               |                    | k Ω                |
| Reference Input Current DAC Code = 55 Hex (Note 3) | I REF              | MAX549A                                   | V DD = V REF = 5.5V  |                    | 330                | 550                | µA                 |
| Reference Input Current DAC Code = 55 Hex (Note 3) | I REF              | MAX549A                                   | V DD = V REF = 2.5V  |                    | 150                | 250                | µA                 |
| Reference Input Current DAC Code = 55 Hex (Note 3) | I REF              | MAX550A                                   | V DD = V REF = 5.5V  |                    | 165                | 275                | µA                 |
| Reference Input Current DAC Code = 55 Hex (Note 3) | I REF              | MAX550A                                   | V DD = V REF = 2.5V  |                    | 75                 | 125                | µA                 |
| DAC OUTPUT                                         | DAC OUTPUT         | DAC OUTPUT                                | DAC OUTPUT           | DAC OUTPUT         | DAC OUTPUT         | DAC OUTPUT         | DAC OUTPUT         |
| DAC Output Voltage Swing                           |                    | MAX548A                                   |                      | 0                  |                    | V DD               | V                  |
| DAC Output Voltage Swing                           |                    | MAX549A/MAX550A                           |                      | 0                  |                    | V REF              | V                  |
| DAC Output Resistance                              | R OUT              |                                           |                      |                    | 33.3               |                    | k Ω                |
| DAC Output Resistance Matching                     | ∆ R OUT / R OUT    | MAX548A/MAX549A                           |                      |                    | ±0.2               |                    | %                  |
| DIGITAL INPUTS                                     | DIGITAL INPUTS     | DIGITAL INPUTS                            | DIGITAL INPUTS       | DIGITAL INPUTS     | DIGITAL INPUTS     | DIGITAL INPUTS     | DIGITAL INPUTS     |
| Input High Voltage                                 | V IH               |                                           |                      | 0.7V DD            |                    |                    | V                  |
| Input Low Voltage                                  | V IL               |                                           |                      |                    |                    | 0.3V DD            | V                  |
| Input Current                                      | I IN               | V IN = 0V or V DD                         |                      |                    |                    | ±1                 | µA                 |
| Input Capacitance (Note 4)                         | CIN                |                                           |                      |                    |                    | 10                 | pF                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## ELECTRICAL CHARACTERISTICS (continued)

(VDD = +2.5V to +5.5V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C)

| PARAMETER                         | SYMBOL              | CONDITIONS                                             |                                                        | MIN                 | TYP                 | MAX                 | UNITS               |
|-----------------------------------|---------------------|--------------------------------------------------------|--------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|
| DYNAMIC PERFORMANCE               | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE                                    | DYNAMIC PERFORMANCE                                    | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE |
| Digital Feedthrough and Crosstalk |                     | CS = high, all digital inputs from 0V to V DD          | CS = high, all digital inputs from 0V to V DD          |                     | 50                  |                     | nV-sec              |
| Voltage-Output Settling Time      |                     | To ±1/2LSB, CL = 20pF                                  | To ±1/2LSB, CL = 20pF                                  |                     | 4                   |                     | µs                  |
| Voltage-Output Slew Rate          |                     | CL = 20pF                                              | V DD = 2.5V                                            |                     | 1.4                 |                     | V/µs                |
| Voltage-Output Slew Rate          |                     | CL = 20pF                                              | V DD = 5.5V                                            |                     | 3.1                 |                     | V/µs                |
| Wake-Up Time at Power-Up          |                     | CL = 20pF                                              | CL = 20pF                                              |                     | 4                   |                     | µs                  |
| POWER SUPPLIES                    | POWER SUPPLIES      | POWER SUPPLIES                                         | POWER SUPPLIES                                         | POWER SUPPLIES      | POWER SUPPLIES      | POWER SUPPLIES      | POWER SUPPLIES      |
| Supply Voltage Range              | V DD                | Outputs unloaded, all inputs = GND or V DD             | Outputs unloaded, all inputs = GND or V DD             | 2.5                 |                     | 5.5                 | V                   |
| Supply Current (MAX548A)          | I DD                | Outputs unloaded, all inputs = GND or V DD (Note 5)    | V DD = 5.5V                                            |                     | 330                 | 550                 | µA                  |
| Supply Current (MAX548A)          | I DD                | Outputs unloaded, all inputs = GND or V DD (Note 5)    | V DD = 2.5V                                            |                     | 150                 | 250                 | µA                  |
| Supply Current (MAX549A/MAX550A)  | I DD                | Outputs unloaded, all inputs = GND or V DD V DD = 5.5V | Outputs unloaded, all inputs = GND or V DD V DD = 5.5V |                     | 0.3                 | 10                  | µA                  |
| Shutdown Current                  |                     | Shutdown mode                                          | Shutdown mode                                          |                     | 0.3                 |                     | µA                  |

## TIMING CHARACTERISTICS

(VDD = +2.5V to +5.5V, TA = TMIN to TMAX, unless otherwise noted. Digital inputs switching from 0V to VDD.) (Figure 3) (Note 4)

| PARAMETER                   | SYMBOL   | CONDITIONS           |   MIN | TYP   | MAX   | UNITS   |
|-----------------------------|----------|----------------------|-------|-------|-------|---------|
| SCLK Pulse Width High       | t CH     |                      |    40 |       |       | ns      |
| SCLK Pulse Width Low        | t CL     |                      |    40 |       |       | ns      |
| DIN to SCLK High Setup      | t DS     |                      |    30 |       |       | ns      |
| DIN to SCLK High Hold       | t DH     | V DD = 2.5V          |     0 |       |       | ns      |
| DIN to SCLK High Hold       | t DH     | V DD = 5.5V          |    10 |       |       | ns      |
| CS Low to SCLK High Setup   | t CSS0   |                      |    30 |       |       | ns      |
| CS High to SCLK High Setup  | t CSS1   |                      |    30 |       |       | ns      |
| SCLK High to CS Low Hold    | t CSH0   |                      |    10 |       |       | ns      |
| Delay, SCLK High to CS High | t CSH1   | V DD = 2.5V          |    10 |       |       | ns      |
| Delay, SCLK High to CS High | t CSH1   | V DD = 5.5V          |    20 |       |       | ns      |
| CS Pulse Width High         | t CSW    |                      |    40 |       |       | ns      |
| SCLK Period                 | t CP     |                      |    80 |       |       | ns      |
| LDAC Pulse Width Low        | t LDAC   | MAX548A/MAX550A only |    50 |       |       | ns      |
| CS High to LDAC Low         | t CSLD   | MAX548A/MAX550A only |    50 |       |       | ns      |
| V DD High to CS Low         |          |                      |     5 |       |       | µs      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

<!-- image -->

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VDD = VREF = 2.5V, RL = 1M Ω , CL = 15pF, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN     | PIN     | PIN     | NAME   | FUNCTION                                                                                                                                                      |
|---------|---------|---------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX548A | MAX549A | MAX550A | NAME   | FUNCTION                                                                                                                                                      |
| 1       | 1       | 1       | GND    | Ground                                                                                                                                                        |
| 2       | 2       | -       | OUTA   | DAC A Output Voltage                                                                                                                                          |
| -       | -       | 2       | OUT    | DAC Output Voltage                                                                                                                                            |
| 3       | 3       | 3       | CS     | Chip-Select Input. A logic low on CS enables serial data to be clocked into the input shift register. Programming commands are executed at CS 's rising edge. |
| 4       | 4       | 4       | DIN    | Serial-Data Input. Data is clocked into the 16-bit input shift register on SCLK's rising edge.                                                                |
| 5       | 5       | 5       | SCLK   | Serial-Clock Input. Data is clocked in on SCLK's rising edge.                                                                                                 |
| 6       | -       | 6       | LDAC   | Load DAC Input. After CS goes high and if programmed by the control word, a falling edge on LDAC updates the DAC latch(es). Connect LDAC to V DD if unused.   |
| 7       | 6       | -       | OUTB   | DAC B Output Voltage                                                                                                                                          |
| -       | 7       | 7       | REF    | External Reference Voltage Input for DAC(s)                                                                                                                   |
| 8       | 8       | 8       | V DD   | Positive Power Supply (+2.5V to +5.5V)                                                                                                                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Analog Section

The MAX548A/MAX549A/MAX550A are 8-bit, voltageoutput digital-to-analog converters (DACs). The MAX548A/MAX549A are dual DACs, and the MAX550A is a single DAC. Each DAC consists of an R-2R ladder network that converts 8-bit digital inputs into equivalent analog output voltages in proportion to the applied reference voltage (Figure 1).

The  DACs  feature  double-buffered  inputs  and unbuffered outputs. The MAX549A/MAX550A require an external reference. The MAX548A's reference inputs are internally connected to VDD. The power-supply range is from +2.5V to +5.5V.

## Reference Input

The voltage applied at REF (VDD for the MAX548A) sets the full-scale  output  for  all  the  DACs  and  may  range from +2.5V to VDD. The REF input resistance is code dependent, with the lowest value occurring with code 01010101 (55 hex). To minimize INL errors, the reference voltage source should have less than 3 Ω output impedance.

## DAC Output

The MAX548A/MAX549A/MAX550A contain DACs with unbuffered outputs; each output connects directly to an R-2R ladder. Typical output impedance is 33.3k Ω . This configuration minimizes power consumption and reduces offset errors. For highest accuracy, apply high resistive loads (1M Ω and up). Lower resistive loads can be driven, but output loading increases full-scale error.

The magnitude of the expected error is the ratio of the DAC output resistance to the DC load resistance at the output.

Typically, an energy pulse is coupled into the DAC output on CS 's  rising  edge.  Since  each DAC output is unbuffered, connecting a small capacitor (200pF to 1000pF) from the output to ground creates a lowpass filter  that  effectively  suppresses the pulse for sensitive applications (see Typical Operating Characteristics).

## Shutdown Mode

When the MAX548A/MAX549A/MAX550A are in shutdown mode, the R-2R ladder disconnects from the reference source. The MAX549A/MAX550A supply current does not change, but the REF input current decreases to less than 1µA. This allows the externally applied system reference  to  remain  active  with  minimal  power consumption. The MAX548A supply current also decreases to less than 1µA in shutdown mode. When the MAX548A/MAX549A/MAX550A exit shutdown mode, recovery time is equivalent to the DAC's settling time.

## Serial Interface

The serial interface is SPI/QSPI and Microwire compatible.  An  active-low  chip  select  ( CS )  enables the input shift register to receive data from the serial input (DIN). Data is clocked into the shift register on the rising edge of  the  serial-clock  signal  (SCLK).  The  clock  frequency can be as high as 10MHz.

Transmit data MSB first in one 16-bit word or two 8-bit bytes. The write cycle can be segmented to allow two 8-bit-wide transfers when CS remains low. After all 16 bits  are  clocked into the input shift register, a rising

Figure 1.  DAC Simplified Circuit Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

edge on CS programs the DAC. The input registers can be loaded independently or simultaneously without updating the DAC registers. This allows both DAC registers to be updated simultaneously with different digital values. The DAC outputs reflect the data stored in the DAC registers. LDAC can be used to asynchronously update the DAC registers independently of CS (MAX548A/MAX550A). With C1 set high, setting C0 in the control word forces the DAC register(s) to be updated on LDAC 's falling edge, rather than CS 's rising edge (Table 1).

## Initialization

The MAX548A/MAX549A/MAX550A have an internal power-on reset. At power-up, all internal registers are reset to zero; therefore, an initialization write sequence is not necessary.

## Serial-Input Data Format and Control Codes

The control byte determines which input registers/DAC registers are updated (Table 1). The DAC input registers  are  updated on the rising edge of CS .  The  DAC registers can be updated on CS 's  rising  edge  or  on LDAC 's  falling  edge  after CS goes high. Bit C0 of the control byte determines how the DAC registers are updated for the MAX548A/MAX550A. The MAX549A has no LDAC pin;  the  DAC registers are always updated on CS 's  rising  edge (C0 in the control byte has no effect).

Tables 2, 3, and 4 list the serial-input command format for  the  MAX548A, MAX549A, and MAX550A, respectively. The 16-bit input word consists of an 8-bit control byte and an 8-bit data byte. The control byte is not decoded internally. Every control bit performs one

Table 1.  Control-Byte/Input-Word Bit Definitions

|         | BIT NAME   | STATE   | OPERATION                                                           |
|---------|------------|---------|---------------------------------------------------------------------|
| CONTROL | UB1*       | X       | Unassigned Bit 1                                                    |
| CONTROL | UB2        | X       | Unassigned Bit 2                                                    |
| CONTROL | UB3        | X       | Unassigned Bit 3                                                    |
| CONTROL | C2         | 0       | Power-Up Mode                                                       |
| CONTROL | C2         | 1       | Power-Down Mode                                                     |
| CONTROL | C1         | 0       | DAC Register Load Operation Disabled                                |
| CONTROL | C1         | 1       | DAC Register Load Operation Enabled                                 |
| CONTROL | C0         | 0       | DAC Register Updated on CS 's Rising Edge                           |
| CONTROL | C0         | 1       | DAC Register Updated on LDAC 's Falling Edge (MAX549A = Don't Care) |
| CONTROL | A1         | 0       | Do Not Address DAC B (MAX550A = Don't Care)                         |
| CONTROL | A1         | 1       | Address DAC B (MAX550A = Don't Care)                                |
| CONTROL | A0         | 0       | Do Not Address DAC A                                                |
| CONTROL | A0         | 1       | Address DAC A                                                       |
|         | D7         | -       | DAC Data Bit 7 (MSB)                                                |
|         | D6         | -       | DAC Data Bit 6                                                      |
|         | D5         | -       | DAC Data Bit 5                                                      |
|         | D4         | -       | DAC Data Bit 4                                                      |
|         | D3         | -       | DAC Data Bit 3                                                      |
|         | D2         | -       | DAC Data Bit 2                                                      |
|         | D1         | -       | DAC Data Bit 1                                                      |
|         | D0**       | -       | DAC Data Bit 0 (LSB)                                                |

X = Don't care    *Clocked in first **Clocked in last

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

function. Data is clocked in starting with unassigned bit 1 (UB1), followed by the remaining control bits and the DAC data byte. The data byte's LSB (D0) is the last bit clocked into the input register (Figure 2).

Table 5 is an example of a 16-bit input word that performs the following functions:

- Loads 80 hex (128 decimal) into the DAC input register (DAC A for the MAX548A/MAX549A)
- Updates the DAC register(s) on CS 's rising edge.

Table 6 shows how to calculate the output voltage based on the input code. Figure 3 gives detailed timing information.

Figure 2.  Serial-Interface Timing Diagram

<!-- image -->

Figure 3.  Detailed Serial-Interface Timing Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

Table 2.  MAX548A Serial-Interface Programming Commands

| CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | CONTROL BYTE                                      | DATA BYTE                                         | LDAC                                              | COMMAND (Commands executed on CS 's rising edge)                                                                                                                 |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UB1                                               | UB2                                               | Loaded First UB3                                  | C2                                                | C1                                                | C0                                                | Loaded First UB3                                  | Loaded First UB3                                  | Loaded Last D7........D0                          | Pin 6                                             | COMMAND (Commands executed on CS 's rising edge)                                                                                                                 |
|                                                   | UNASSIGNED                                        | COMMANDS                                          |                                                   |                                                   |                                                   | A1                                                | A0                                                |                                                   |                                                   |                                                                                                                                                                  |
| X                                                 | X                                                 | X                                                 | 0                                                 | 0                                                 | X                                                 | 0                                                 | 0                                                 | XXXXXXXX                                          | X                                                 | Unassigned command                                                                                                                                               |
| X                                                 | X                                                 | X                                                 | 1                                                 | X                                                 | X                                                 | 0                                                 | 0                                                 | XXXXXXXX                                          | X                                                 | Unassigned operation                                                                                                                                             |
| COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY           | COMMANDS LOADING INPUT REGISTER(S) ONLY                                                                                                                          |
| X                                                 | X                                                 | X                                                 | 0                                                 | 0                                                 | X                                                 | 0                                                 | 1                                                 | 8-Bit DAC Data                                    | X                                                 | Load DAC A input register. DAC B input register and both DAC registers unchanged.                                                                                |
| X                                                 | X                                                 | X                                                 | 0                                                 | 0                                                 | X                                                 | 1                                                 | 0                                                 | 8-Bit DAC Data                                    | X                                                 | Load DAC B input register. DAC A input register and both DAC registers unchanged.                                                                                |
| X                                                 | X                                                 | X                                                 | 0                                                 | 0                                                 | X                                                 | 1                                                 | 1                                                 | 8-Bit DAC Data                                    | X                                                 | Load both DAC input registers. Both DAC regis- ters unchanged.                                                                                                   |
| COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                 | COMMANDS UPDATING DAC REGISTER(S)                                                                                                                                |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 0                                                 | 0                                                 | 0                                                 | XXXXXXXX                                          | X                                                 | Update both DAC registers with current contents of their input registers. Both input registers unchanged.                                                        |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 0                                                 | 0                                                 | 1                                                 | 8-Bit DAC Data                                    | X                                                 | Load DAC A input register and update both DAC registers. DAC B input register unchanged.                                                                         |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 0                                                 | 1                                                 | 0                                                 | 8-Bit DAC Data                                    | X                                                 | Load DAC B input register and update both DAC registers. DAC A input register unchanged.                                                                         |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 0                                                 | 1                                                 | 1                                                 | 8-Bit DAC Data                                    | X                                                 | Load both DAC input registers and update both DAC registers.                                                                                                     |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 0                                                 | 0                                                 | XXXXXXXX                                          | 0                                                 | Update both DAC registers with current contents of their input registers. Both input registers unchanged.                                                        |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 0                                                 | 1                                                 | 8-Bit DAC Data                                    | 0                                                 | Load DAC A input register and update both DAC registers. DAC B input register unchanged.                                                                         |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 1                                                 | 0                                                 | 8-Bit DAC Data                                    | 0                                                 | Load DAC B input register and update both DAC registers. DAC A input register unchanged.                                                                         |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 1                                                 | 1                                                 | 8-Bit DAC Data                                    | 0                                                 | Load both DAC input registers and update both DAC registers.                                                                                                     |
| COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                                                                                                                |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 0                                                 | 0                                                 | XXXXXXXX                                          | 1                                                 | After CS 's rising edge and on LDAC 's falling edge, update both DAC registers with current contents of their input registers. Both input regis- ters unchanged. |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 0                                                 | 1                                                 | 8-Bit DAC Data                                    | 1                                                 | Load DAC A input register. After CS 's rising edge and on LDAC 's falling edge, update both DAC registers.                                                       |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 1                                                 | 0                                                 | 8-Bit DAC Data                                    | 1                                                 | Load DAC B input register. After CS 's rising edge and on LDAC 's falling edge, update both DAC registers.                                                       |
| X                                                 | X                                                 | X                                                 | 0                                                 | 1                                                 | 1                                                 | 1                                                 | 1                                                 | 8-Bit DAC Data                                    | 1                                                 | Load both DAC input registers. After CS 's rising edge and on LDAC 's falling edge, update both DAC registers.                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## Table 2.  MAX548A Serial-Interface Programming Commands (continued) COMMANDS FOR POWERING DOWN

| CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | CONTROL BYTE                                                        | DATA BYTE                                                           | LDAC                                                                | COMMAND (Commands executed on CS 's rising edge)                                                                                                        |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded First                                                        | Loaded Last                                                         | LDAC                                                                | COMMAND (Commands executed on CS 's rising edge)                                                                                                        |
| UB1                                                                 | UB2                                                                 | UB3                                                                 | C2                                                                  | C1                                                                  | C0                                                                  | A1                                                                  | A0                                                                  | D7........D0                                                        | Pin 6                                                               | COMMAND (Commands executed on CS 's rising edge)                                                                                                        |
| COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY           | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY                                                                                               |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 0                                                                   | X                                                                   | 0                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load DAC A input register and power down DAC A. DAC B registers unchanged.                                                                              |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 0                                                                   | X                                                                   | 1                                                                   | 0                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load DAC B input register and power down DAC B. DAC A registers unchanged.                                                                              |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 0                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load both DAC input registers and power down both DACs. Both DAC registers unchanged                                                                    |
| COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                 | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                                                                                                     |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 0                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load DAC A input register, power down DAC A, and update both DAC registers. DAC B input register unchanged.                                             |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 1                                                                   | 0                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load DAC B input register, power down DAC B, and update both DAC registers. DAC A input register unchanged.                                             |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 1                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | X                                                                   | Load both DAC input registers, power down both DACs, and update both DAC registers.                                                                     |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | 0                                                                   | Load DAC A input register, power down DAC A, and update both DAC registers. DAC B input register unchanged.                                             |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 8-Bit DAC Data                                                      | 0                                                                   | Load DAC B input register, power down DAC B, and update both DAC registers. DAC A input register unchanged.                                             |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | 0                                                                   | Load both DAC input registers and power down both DACs. Update both DAC registers.                                                                      |
| COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMANDS POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                                                                                     |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | 1                                                                   | Load DAC A input register and power down DAC A. While powered down, on LDAC 's falling edge, update both DAC registers. DAC B input register unchanged. |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 0                                                                   | 8-Bit DAC Data                                                      | 1                                                                   | Load DAC B input register and power down DAC B. While powered down, on LDAC 's falling edge, update both DAC registers. DAC A input register unchanged. |
| X                                                                   | X                                                                   | X                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 1                                                                   | 8-Bit DAC Data                                                      | 1                                                                   | Load both DAC input registers and power down both DACs. While powered down, on LDAC 's falling edge, update both DAC registers.                         |

X = Don't care

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

Table 3.  MAX549A Serial-Interface Programming Commands

| CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | CONTROL BYTE                                              | DATA BYTE Loaded Last                                     | COMMAND (Commands executed on CS 's rising edge)                                                            |
|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| UB1                                                       | UB2                                                       | UB3                                                       | C2                                                        | C1                                                        | C0                                                        | A1                                                        | A0                                                        | D7........D0                                              | COMMAND (Commands executed on CS 's rising edge)                                                            |
| UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                        | UNASSIGNED COMMAND                                                                                          |
| X                                                         | X                                                         | X                                                         | X                                                         | 0                                                         | X                                                         | 0                                                         | 0                                                         | XXXXXXXX                                                  | Unassigned command                                                                                          |
| COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                   | COMMANDS LOADING INPUT REGISTER(S) ONLY                                                                     |
| X                                                         | X                                                         | X                                                         | 0                                                         | 0                                                         | X                                                         | 0                                                         | 1                                                         | 8-Bit DAC Data                                            | Load DAC A input register. DAC registers unchanged.                                                         |
| X                                                         | X                                                         | X                                                         | 0                                                         | 0                                                         | X                                                         | 1                                                         | 0                                                         | 8-Bit DAC Data                                            | Load DAC B input register. DAC registers unchanged.                                                         |
| X                                                         | X                                                         | X                                                         | 0                                                         | 0                                                         | X                                                         | 1                                                         | 1                                                         | 8-Bit DAC Data                                            | Load both DAC input registers. DAC registers unchanged.                                                     |
| COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                         | COMMANDS UPDATING DAC REGISTER(S)                                                                           |
| X                                                         | X                                                         | X                                                         | X                                                         | 1                                                         | X                                                         | 0                                                         | 0                                                         | XXXXXXXX                                                  | Update both DAC registers with current contents of their input registers. Both input registers unchanged.   |
| X                                                         | X                                                         | X                                                         | 0                                                         | 1                                                         | X                                                         | 0                                                         | 1                                                         | 8-Bit DAC Data                                            | Load DAC A input register and update both DAC registers. DAC B input register unchanged.                    |
| X                                                         | X                                                         | X                                                         | 0                                                         | 1                                                         | X                                                         | 1                                                         | 0                                                         | 8-Bit DAC Data                                            | Load DAC B input register and update both DAC registers. DAC A input register unchanged.                    |
| X                                                         | X                                                         | X                                                         | 0                                                         | 1                                                         | X                                                         | 1                                                         | 1                                                         | 8-Bit DAC Data                                            | Load both DAC input registers and update both DAC registers.                                                |
| COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY | COMMANDS POWERING DOWN AND LOADING INPUT REGISTER(S) ONLY                                                   |
| X                                                         | X                                                         | X                                                         | 1                                                         | 0                                                         | X                                                         | 0                                                         | 1                                                         | 8-Bit DAC Data                                            | Load DAC A input register and power down DAC A. DAC B input register and both DAC registers unchanged.      |
| X                                                         | X                                                         | X                                                         | 1                                                         | 0                                                         | X                                                         | 1                                                         | 0                                                         | 8-Bit DAC Data                                            | Load DAC B input register and power down DAC B. DAC A input register and both DAC registers unchanged.      |
| X                                                         | X                                                         | X                                                         | 1                                                         | 0                                                         | X                                                         | 1                                                         | 1                                                         | 8-Bit DAC Data                                            | Load both DAC input registers and power down both DACs. Both DAC registers unchanged.                       |
| COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)       | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER(S)                                                         |
| X                                                         | X                                                         | X                                                         | 1                                                         | 1                                                         | X                                                         | 0                                                         | 1                                                         | 8-Bit DAC Data                                            | Load DAC A input register, power down DAC A, and update both DAC registers. DAC B input register unchanged. |
| X                                                         | X                                                         | X                                                         | 1                                                         | 1                                                         | X                                                         | 1                                                         | 0                                                         | 8-Bit DAC Data                                            | Load DAC B input register, power down DAC B, and update both DAC registers. DAC A input register unchanged. |
| X                                                         | X                                                         | X                                                         | 1                                                         | 1                                                         | X                                                         | 1                                                         | 1                                                         | 8-Bit DAC Data                                            | Load both DAC input registers, power down both DACs, and update both DAC registers.                         |

X = Don't care

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX548A/MAX549A/MAX550A

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## Table 4.  MAX550A Serial-Interface Programming Commands

| CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | CONTROLBYTE                                                        | DATABYTE                                                           | LDAC                                                               | COMMAND (Commands executed on CS 's rising edge)                                                                                            |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded First                                                       | Loaded Last                                                        | LDAC                                                               | COMMAND (Commands executed on CS 's rising edge)                                                                                            |
| UB1                                                                | UB2                                                                | UB3                                                                | C2                                                                 | C1                                                                 | C0                                                                 | A1                                                                 | A0                                                                 | D7........D0                                                       | Pin 6                                                              | COMMAND (Commands executed on CS 's rising edge)                                                                                            |
| UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                | UNASSIGNED COMMANDS                                                                                                                         |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 0                                                                  | X                                                                  | X                                                                  | 0                                                                  | XXXXXXXX                                                           | X                                                                  | Unassigned command                                                                                                                          |
| X                                                                  | X                                                                  | X                                                                  | 1                                                                  | X                                                                  | X                                                                  | X                                                                  | 0                                                                  | XXXXXXXX                                                           | X                                                                  | Unassigned operation                                                                                                                        |
| COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                               | COMMANDS LOADING INPUT REGISTER ONLY                                                                                                        |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 0                                                                  | X                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | X                                                                  | Load DAC input register. DAC register unchanged.                                                                                            |
| COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                      | COMMANDS LOADING DAC REGISTER                                                                                                               |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 0                                                                  | X                                                                  | 0                                                                  | XXXXXXXX                                                           | X                                                                  | Update DAC register with current contents of input register. Input register unchanged.                                                      |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 0                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | X                                                                  | Load DAC input register and update DAC register.                                                                                            |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 0                                                                  | XXXXXXXX                                                           | 0                                                                  | Update DAC register with current contents of input register. Input register unchanged.                                                      |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | 0                                                                  | Load DAC input register and update DAC register.                                                                                            |
| COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                  | COMMANDS UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                                                                                           |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 0                                                                  | XXXXXXXX                                                           | 1                                                                  | After CS 's rising edge and on LDAC 's falling edge, update DAC register with current contents of input register. Input register unchanged. |
| X                                                                  | X                                                                  | X                                                                  | 0                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | 1                                                                  | Load DAC input register. After CS 's rising edge and on LDAC 's falling edge, update DAC register.                                          |
| COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY              | COMMAND POWERING DOWN AND LOADING INPUT REGISTER ONLY                                                                                       |
| X                                                                  | X                                                                  | X                                                                  | 1                                                                  | 0                                                                  | X                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | X                                                                  | Load DAC input register and power down DAC.                                                                                                 |
| COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                   | COMMANDS POWERING DOWN AND UPDATING DAC REGISTER                                                                                            |
| X                                                                  | X                                                                  | X                                                                  | 1                                                                  | 1                                                                  | 0                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | X                                                                  | Load DAC input register, power down DAC, and update DAC register.                                                                           |
| X                                                                  | X                                                                  | X                                                                  | 1                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | 0                                                                  | Load DAC input register, power down DAC, and update DAC register.                                                                           |
| COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION | COMMAND POWERING DOWN AND UTILIZING THE ASYNCHRONOUS LOAD FUNCTION                                                                          |
| X                                                                  | X                                                                  | X                                                                  | 1                                                                  | 1                                                                  | 1                                                                  | X                                                                  | 1                                                                  | 8-Bit DAC Data                                                     | 1                                                                  | Load DAC input register and power down DAC. While powered down, on LDAC 's falling edge, update DAC register.                               |

X = Don't care

## Table 5.  Example Input Word

| CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | CONTROL BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   | DATA BYTE   |
|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| Loaded First   | Loaded First   | Loaded First   |                |                |                |                |                |             |             |             |             |             |             | Loaded Last | Loaded Last |
| UB1            | UB2            | UB3            | C2             | C1             | C0             | A1             | A0             | D7          | D6          | D5          | D4          | D3          | D2          | D1          | D0          |
| X              | X              | X              | 0              | 1              | 0              | 0              | 1              | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |

X = Don't care

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

## Microprocessor Interfacing

The MAX548A/MAX549A/MAX550A serial interface is SPI/QSPI and Microwire compatible. For SPI/QSPI, clear the CPOL and CPHA bits (CPOL = 0 and CPHA = 0). CPOL = 0 sets the clock idle state to zero, and CPHA = 0 changes data at SCLK's falling edge. This is the Microwire default condition. If a serial port is not available on your microprocessor, three bits of a parallel port can be used to emulate a serial port by bit manipulation. Operate the serial clock only when necessary, to minimize digital feedthrough at the DAC registers.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Power-Supply and Ground Considerations

Connect GND to the highest quality ground available. Bypass VDD with a 0.1µF to 0.22µF capacitor to GND. The reference input can be used without bypassing. However, for optimum line/load-transient response and noise performance, bypass the reference input with a 0.1µF to 4.7µF capacitor to GND.

Table 6.  Analog Output vs. Code

| DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | DAC CONTENTS   | ANALOG OUTPUT (V)               |
|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|---------------------------------|
| D7             | D6             | D5             | D4             | D3             | D2             | D1             | D0             | ANALOG OUTPUT (V)               |
| 1              | 1              | 1              | 1              | 1              | 1              | 1              | 1              | +V REF (255 / 256)              |
| 1              | 0              | 0              | 0              | 0              | 0              | 0              | 1              | +V REF (129 / 256)              |
| 1              | 0              | 0              | 0              | 0              | 0              | 0              | 0              | +V REF (128 / 256) = +V REF / 2 |
| 0              | 1              | 1              | 1              | 1              | 1              | 1              | 1              | +V REF (127 / 256)              |
| 0              | 0              | 0              | 0              | 0              | 0              | 0              | 1              | +V REF (1 / 256)                |
| 0              | 0              | 0              | 0              | 0              | 0              | 0              | 0              | 0                               |

Note: 1LSB = VREF x 2 -8 = VREF(1 / 256); ANALOG OUTPUT = +VREF(I / 256), where I = Integer Value of Digital Input.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations (continued)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Careful PC board layout minimizes crosstalk in DAC registers, the reference, and the digital inputs. Separate analog traces by running ground traces between them. Make sure that high-frequency digital lines are not routed parallel to analog lines.

## AC Considerations

## Digital Feedthrough

High-speed data at any of the digital input pins can couple through a DAC's internal stray package capacitance and cause noise (digital feedthrough) at the DAC output, even though LDAC and/or CS are held high (see Typical Operating Characteristics). Test digital feedthrough by holding LDAC and/or CS high and toggling the digital inputs from all 1s to all 0s.

## Analog Feedthrough

Due to internal stray capacitance, higher frequency analog input signals at REF can couple to the output, even when the input digital code is all 0s. This condition is shown in the MAX549A/MAX550A Reference AC Feedthrough vs. Frequency graph in the Typical Operating Characteristics. Test analog feedthrough by setting all DAC outputs to 0V and sweeping REF.

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Functional Diagram

<!-- image -->

## \_Ordering Information (continued)

| PART        | TEMP. RANGE    | PIN-PACKAGE   |
|-------------|----------------|---------------|
| MAX549A CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX549ACUA  | 0°C to +70°C   | 8 µMAX        |
| MAX549AC/D  | 0°C to +70°C   | Dice*         |
| MAX549AEPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX549AEUA  | -40°C to +85°C | 8 µMAX        |
| MAX550A CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX550ACUA  | 0°C to +70°C   | 8 µMAX        |
| MAX550AC/D  | 0°C to +70°C   | Dice*         |
| MAX550AEPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX550AEUA  | -40°C to +85°C | 8 µMAX        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 1562

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

PDIPN.EPS

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +2.5V to +5.5V, Low-Power, Single/Dual, 8-Bit Voltage-Output DACs in µMAX Package

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information (continued)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600