<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

## General Description

The MAX19586/MAX19588 evaluation kits (EV kits) are fully  assembled and tested PCBs that contain all the components necessary to evaluate the performance of the MAX19586 and MAX19588. The MAX19586 is a 16-bit, 80Msps analog-to-digital converter (ADC), while the  MAX19588  is  a  16-bit,  100Msps  ADC.  The MAX19586/MAX19588 EV kits can accept a differential or  single-ended analog input. For applications with a single-ended signal source, the MAX19586/MAX19588 EV kits feature an on-board transformer that converts this signal to the required differential signal. The digital outputs produced by the MAX19586/MAX19588 can be captured with a logic analyzer or data-acquisition system. The EV kits operate from a 3.3V and a 1.8V power supply.

## Part Selection Table

| PART NUMBER   |   BITS |   SPEED (Msps) |
|---------------|--------|----------------|
| MAX19586ETN+  |     16 |             80 |
| MAX19588ETN+  |     16 |            100 |

| DESIGNATION               |   QTY | DESCRIPTION                                                                |
|---------------------------|-------|----------------------------------------------------------------------------|
| C1, C6, C10, C18, C28-C33 |    10 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K           |
| C2-C5, C8, C9, C11, C12   |     0 | Not installed capacitors (0603)                                            |
| C13, C14                  |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K             |
| C19, C22, C25             |     3 | 220µF ±20%, 6.3V low-ESR tantalum capacitors (D-case) AVX TPSD227M006R0100 |
| C20, C23, C26             |     3 | 47µF ±20%, 6.3V X5R ceramic capacitors (1210) TDK C3225X5R0J476M           |
| C21, C24, C27             |     3 | 2.2µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225M          |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                    |
|-------------------------|-------|------------------------------------------------------------------------------------------------|
| C34, C38, C39, C40      |     4 | 0.01µF ±10%, 16V X7R ceramic capacitors (0306) TDK C0816X7R1C103K                              |
| C35, C36, C41, C42, C43 |     5 | 0.1µF ±20%, 16V X7R ceramic capacitors (0306) TDK C0816X7R1C104M                               |
| C37                     |     1 | 0.1µF ±10%, 6.3V X5R ceramic capacitor (0201) TDK C0603X5R0J104K Murata GRM33R60J104K          |
| D1                      |     1 | 15mA, 70V, dual Schottky diode (SOT23) Diodes Inc. BAS70-04 or Central Semiconductor CMPD6263S |
| CLOCK, INPUT+           |     2 | SMA PC mount connectors                                                                        |
| INPUT-                  |     0 | Not installedSMAPC mount connector                                                             |
| J1, J2                  |     2 | 2-pin headers                                                                                  |
| J3, J4                  |     2 | 2 x 8-pin headers                                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Features

- ♦ Fully Assembled and Tested
- ♦ Up to 80Msps/100Msps Sampling Rate
- ♦ Single-Ended-to-Differential Clock Conversion Circuitry
- ♦ Configurable for Differential or Single-Ended Analog Input Signals
- ♦ On-Board Digital Output Buffer
- ♦ Low-Voltage and Low-Power Operation
- ♦ Simplifies Evaluation of the MAX19586/MAX19588

## Ordering Information

| PART            | TEMP RANGE    | IC PACKAGE       |
|-----------------|---------------|------------------|
| MAX19586EVKIT + | 0°C to +70°C* | 56 Thin QFN-EP** |
| MAX19588EVKIT + | 0°C to +70°C* | 56 Thin QFN-EP** |

## MAX19586/MAX19588 Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| T1, T3        |     2 | 1:2 RF transformers Mini-Circuits ADT2-1T+                                        |
| T2            |     1 | 1:1 RF transformer Mini-Circuits T1-1T-KK81+                                      |
| U1            |     1 | See the EV Kit-Specific Component List section                                    |
| U2            |     1 | Low-voltage, 22-bit register (64-pin TSSOP) Fairchild 74VCX16722MTD               |
| U3            |     1 | TinyLogic ULP-A inverter with Schmitt trigger input (SC70-5) Fairchild NC7SV14P5X |
| -             |     1 | PC board terminal block (plug onto the J6 pin strip) 6pins, 5mmpitch, 250V,10A    |
| -             |     1 | PCB: MAX19586/MAX19588 evaluation kits+                                           |

## EV Kit-Specific Component List

| EV KIT PART NUMBER   | REFERENCE DESIGNATOR   | DESCRIPTION                                            |
|----------------------|------------------------|--------------------------------------------------------|
| MAX19586EVKIT+       | U1                     | MAX19586ETN+ (56-pin, 8mm x 8mm x 0.8mm Thin QFN-EP**) |
| MAX19588EVKIT+       | U1                     | MAX19588ETN+ (56-pin, 8mm x 8mm x 0.8mm Thin QFN-EP**) |

| DESIGNATION        |   QTY | DESCRIPTION                                      |
|--------------------|-------|--------------------------------------------------|
| J5                 |     1 | 2 x 20-pin header                                |
| J6                 |     1 | PCB pin strip, 6 pins, 5mm pitch, 250V, 10A      |
| L1, L2, L3         |     3 | EMI filters (1806) Murata NFM41PC204F1H3B        |
| L4                 |     0 | Not installed, high-Q chip inductor (0603)       |
| R1-R5, R8, R9, R13 |     0 | Not installed, resistors (0603)                  |
| R6, R7, R10, R11   |     4 | 49.9 Ω ±1% resistors (0603)                      |
| R12                |     1 | 10k Ω ±1% resistor (0603)                        |
| R14                |     1 | 120 Ω ±5% resistor (0603)                        |
| R15                |     1 | 49.9 Ω ±1% resistor (0402)                       |
| RA1, RA2           |     2 | 120 Ω ±5% resistor arrays Panasonic EXB-2HV-121J |

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE               |
|-----------------------------|--------------|-----------------------|
| AVX Corp.                   | 843-946-0238 | www.avxcorp.com       |
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com   |
| Diodes Inc.                 | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor     | 888-522-5372 | www.fairchildsemi.com |
| Mini-Circuits               | 718-934-4500 | www.minicircuits.com  |
| Murata Mfg. Co., Ltd.       | 770-436-1300 | www.murata.com        |
| Panasonic Corp.             | 714-373-7366 | www.panasonic.com     |
| TDK Corp.                   | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX19586/MAX19588 when contacting these component suppliers.

<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

## Quick Start

## Recommended Equipment

- DC power supplies:
- Signal generator with low phase noise and low jitter for clock input (e.g., HP/Agilent 8644B)
- Signal generator for analog signal input (e.g., HP/Agilent 8644B)
- Analog bandpass filters for input signal and clock signal (e.g., Allen Avionics, K&amp;L Microwave)
- Logic analyzer or data-acquisition system (e.g., HP/ Agilent 16500C, Tektronix TLA621)

Analog (AVDD)

3.3V, 500mA

Digital (DVDD)

1.8V, 100mA

Logic (VL)

1.8V, 100mA

Note: The Quick Start procedure in this section only provides a quick functional check for the MAX19586/MAX19588 EV kits. To verify the full dynamic performance of the MAX19586/MAX19588, refer  to  the Testing the MAX1958\_ sections in the respective IC data sheets.

## Procedure

The MAX19586/MAX19588 EV kits are fully assembled and tested PCBs. Follow the steps below to verify board operation (Figure 1). Caution: Do not turn on power supplies or enable signal generators until all connections are completed.

- 1) Connect the output of the clock signal generator to the input of the clock bandpass filter.
- 2) Connect the output of the clock bandpass filter to the CLOCK SMA connector on the EV kit.
- 3) Connect the output of the analog signal generator to the input of the analog bandpass filter.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Connect the output of the analog bandpass filter to the INPUT+ SMA connector on the EV kit.
- 5) Connect header J5 to the HP/Agilent logic analyzer. Alternatively, for Tektronix-type logic analyzers, connect to headers J1, J3, and J4. To capture the DOR bit (data over-range), connect a free logic analyzer data line to header J2. See the Digital Output Signals section in this document for bit locations and all header designations.
- 6) Connect the 3.3V, 500mA power supply to the AVDD terminal. Connect the ground terminal of this supply to the GND terminal.
- 7) Connect a 1.8V, 100mA power supply to the DVDD terminal. Connect the ground terminal of this supply to the GND terminal.
- 8) Connect another 1.8V, 100mA power supply to the VL terminal. Connect the ground terminal of this supply to the corresponding GND terminal.
- 9) Turn on the power supplies.
- 10) Enable the signal generators. Set the clock signal generator output power to +19dBm and the frequency (fCLK) to 80MHz for the MAX19586 EV kit, or 100MHz for the MAX19588 EV kit. Set the analog input signal generator output to the desired frequency and amplitude. For coherent data capture, the signal generators should be phase-locked. Adjust the analog input signal level to overcome cable and filter losses that may exist in the signal's i nput  path.  Note  that  the  ADC  full  scale  is +9.1dBm.
- 11) Enable the logic analyzer and start collecting data.

## MAX19586/MAX19588 Evaluation Kits

## Detailed Description

The MAX19586/MAX19588 EV kits are fully assembled and tested PCBs that contain all the components necessary to evaluate the performance of the MAX19586 or the MAX19588 ADCs. Digital data generated by the ADCs is captured on a 16-bit bus (+ DOR bit). The EV kits can be evaluated with a maximum clock frequency (fCLK) of 80MHz for the MAX19586, or 100Msps for the MAX19588.

The EV kits are designed as six-layer PCBs to optimize the performance of the converter. The EV kits are specified to have 3.3V and 1.8V power supplies applied to the analog (AVDD) and digital (DVDD, VL) power planes, respectively.

The digital  outputs  are  available  on  connectors  J5  or J3 and J4. J5 is a 40-pin connector, which can directly interface  with  a  user-provided  logic  analyzer  or  dataacquisition system. The digital output clock signal, which is used to synchronize the output data to the logic  analyzer,  is  available  at  the  CLKO  pins  on  J5-3 and J1-1.

## Power Supplies

The MAX19586/MAX19588 EV kits require separate analog and digital power supplies. A 3.3V power supply  is  used  to  power  the  analog  portion  of  the  ADC. Two separate 1.8V power supplies are recommended: DVDD powers the digital portion of the MAX19586/MAX19588, and VL powers the buffer/ driver U2.

## Reference Voltage

The full-scale range for the MAX19586/MAX19588 is set  to  2.56VP-P  by  an  internal  reference  voltage.  The MAX19586/MAX19588's internal reference voltage is 1.28V, and can be monitored at the REFOUT pad on the  EV  kit.  To  use  the  internal  reference  voltage,  the reference input (REFIN) must be connected to the reference output (REFOUT) through resistor R12.

The MAX19586/MAX19588 EV kits also provide a REFIN pad, allowing an external reference source to be connected to the ADC. An external reference source can be in the range of 1.28V ±10%.

## Clock

A user-provided single-ended clock signal is converted to a differential clock signal through transformer T3. To reduce clock jitter, the clock signal should have high slew rates at its zero crossings. A large clock signal amplitude can be used to maximize the slew rate at its  zero crossings. Diode D1 limits the differential signal swing at the clock input when a large clock signal i s used to maximize the slew rate. The MAX19586/MAX19588 EV kits are tested with a +16dBm to +19dBm clock signal, with about 6dB loss i n  the  bandpass  filter  that  follows  the  clock signal generator.

## Analog Input Signal

The MAX19586/MAX19588 require a differential analog input signal of less than or equal to +9.1dBm (2.56VP-P into  100 Ω ).  The  EV  kits  feature  on-board  transformer

Figure 1. MAX19586/MAX19588 EV Kits Quick Start Setup and Connections

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

T1 that converts the output of a user-provided singleended signal to a differential signal for the ADC. Transformer T1 has a primary-to-secondary turns ratio of  1:1.414.  Therefore,  the  single-ended  signal  should have a power level of less than or equal to +9.1dBm (1.81VP-P into 50 Ω ).  Cable and bandpass filter losses affect the amplitude of the received signal at the ADC. Therefore, account for these losses when configuring the signal input generator amplitude.

The EV kits accept a fully differential input signal after making the following modifications:

- Cut the trace between resistor R1 PCB pads.
- Remove transformers T1 and T2.
- Install a 0.1µF (0603) ceramic capacitor on C2.
- Install 0 Ω (0603) resistors on R2, R3, R4, and R5.
- Install an SMA connector on the INPUT- PCB footprint.

## Digital Output Signals

The MAX19586/MAX19588 feature a 16-bit, parallel, CMOS-compatible digital output bus and a DOR bit. The digital outputs of the ADC and the DOR bit are applied to a latch that is capable of driving large capacitive loads that may be present at the logic analyzer  connection. The outputs of the buffer are connected to two sets of connectors. The first set of connectors includes J1 for the digital output clock signal, J2 for the DOR bit, J3 and J4 for the digital output signals.  This  set  of  connectors  accommodates the dataacquisition and logic-analyzer systems such as Tektronix's TLA621. The second set of connectors consists of a single 40-pin header, J5, which provides all signals, except for the DOR bit, for logic-analyzer systems such as HP/Agilent 16500C. See Table 1 for headers J1-J5 bit locations.

<!-- image -->

Note that a poor-quality connection may lead to apparent performance degradation. To optimize dynamic performance, avoid using 'flying' (or individual) lead logic-analyzer probes for collecting data from the MAX19586/MAX19588 EV kits.

Table 1. Digital Output Bit Locations

| BIT   | HEADERS J1-J4   | HEADER J5   |
|-------|-----------------|-------------|
| CLKO  | J1-1            | J5-3        |
| DOR   | J2-1            | -           |
| D15   | J3-1            | J5-7        |
| D14   | J3-3            | J5-9        |
| D13   | J3-5            | J5-11       |
| D12   | J3-7            | J5-13       |
| D11   | J3-9            | J5-15       |
| D10   | J3-11           | J5-17       |
| D9    | J3-13           | J5-19       |
| D8    | J3-15           | J5-21       |
| D7    | J4-1            | J5-23       |
| D6    | J4-3            | J5-25       |
| D5    | J4-5            | J5-27       |
| D4    | J4-7            | J5-29       |
| D3    | J4-9            | J5-31       |
| D2    | J4-11           | J5-33       |
| D1    | J4-13           | J5-35       |
| D0    | J4-15           | J5-37       |

Note:

All even numbered pins are connected to ground.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 2a. MAX19586/MAX19588 EV Kits Schematic (Sheet 1 of 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

<!-- image -->

Figure 2b. MAX19586/MAX19588 EV Kits Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 3. MAX19586/MAX19588 EV Kits Component Placement Guide-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

Figure 4. MAX19586/MAX19588 EV Kits PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 5. MAX19586/MAX19588 EV Kits PCB-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

<!-- image -->

Figure 6. MAX19586/MAX19588 EV Kits PCB-VDD Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 7. MAX19586/MAX19588 EV Kits PCB-VDD Layer 4

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19586/MAX19588 Evaluation Kits

<!-- image -->

Figure 8. MAX19586/MAX19588 EV Kits PCB-GND Layer 5

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 9. MAX19586/MAX19588 EV Kits PCB-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19586/MAX19588 Evaluation Kits

Figure 10. MAX19586/MAX19588 EV Kits Component Placement Guide-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-14

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 15