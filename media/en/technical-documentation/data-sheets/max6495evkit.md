<!-- lastmod 2022-08-03 -->
## General Description

The MAX6495 evaluation kit (EV kit) demonstrates a high-voltage overvoltage protection circuit for automotive applications that must survive load dump and highvoltage transient conditions. This EV kit is a fully assembled and tested surface-mount board.

This  EV  kit  supports  high  output  currents  of  up  to  5A, operates at voltages up to 72V, and withstands temperatures ranging from -40°C to +105°C. Two alternate voltage inputs implement two different schemes for reverse-battery protection.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C7        |     2 | 22µF, 100V aluminum electrolytic capacitors Vishay 222215369229                          |
| C2, C8-C12    |     0 | Not installed, capacitors                                                                |
| C3            |     1 | Not installed, capacitor (1206)                                                          |
| C6            |     1 | 0.1µF, 100V X7R ceramic capacitor TDK C3216X7R2A104K or AVX 12061C104KAT2A               |
| C13           |     1 | Not installed, electrolytic capacitor                                                    |
| D1            |     1 | 8A/100V Schottky diode International Rectifier 8TQ100S or ST Microelectronics STPS8H100G |
| D2            |     1 | 60V, 600W TVS diode Diodes SMBJ54A or Fairchild SMBJ54A                                  |
| D3            |     1 | 18V zener diode Central Semi CMPZ5248B or Diodes MMBZ5248BT                              |
| D4            |     1 | Not installed, optional TVS diode (DO-15)                                                |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| J1            |     0 | Not installed, 2-pin header                                                        |
| J2, J3, J4    |     3 | 3-pin headers                                                                      |
| M1            |     1 | 100V, 33A n-channel MOSFET International Rectifier IRF540NS or Fairchild FQB33N10  |
| M2            |     1 | 100V, 23A p-channel MOSFET International Rectifier IRF9540NS or Fairchild FQB22P10 |
| R1            |     1 | 649k Ω ±1% resistor (0805)                                                         |
| R2            |     1 | 49.9k Ω ±1% resistor (0805)                                                        |
| R4            |     1 | Not installed, resistor (0805)                                                     |
| R5            |     1 | 100k Ω ±1% resistor (0805)                                                         |
| R6            |     1 | 2.2M Ω ±1% resistor                                                                |
| U1            |     1 | MAX6495ATT (6-pin TDFN)                                                            |
| -             |     1 | PCB: MAX6495EVKIT                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

<!-- image -->

## Features

- ♦ 5.5V to 72V Wide Supply Voltage Range
- ♦ Up to 5A Output Current Capacity
- ♦ Selectable Overvoltage Mode and Overvoltage Limiter Mode
- ♦ Adjustable Overvoltage Threshold
- ♦ 100V Reverse-Battery Protection

## Ordering Information

| PART         | TEMP RANGE      | IC PACKAGE   |
|--------------|-----------------|--------------|
| MAX6495EVKIT | -40°C to +105°C | 6 TDFN-EP*   |

## MAX6495 Evaluation Kit

## Quick Start

The MAX6495 EV kit is fully assembled and tested. Follow these steps to verify operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a DC power supply (0 to 20V or above, 5A or depending on load) to VIN1 and GND.
- 2) Connect a voltmeter or oscilloscope and a load (if desired) to OUT and GND.
- 3) Make sure the J2 shunt connects pins 1-2 (overvoltage-protect mode). The J4 shunt should connect pins 1-2.
- 4) Turn on the power supply and increase the input voltage. The output turns on when the input voltage reaches 5.5V. Increase the supply voltage further; the output turns off when the input voltage reaches 17V.
- 5) The above steps can be followed for a power supply connected to VIN2 or VIN3. The thresholds for turn on and turn off for inputs VIN2 and VIN3 are higher due to the voltage drop across the reverse-battery protection.

## Detailed Description

The MAX6495 EV kit demonstrates a high-voltage overvoltage protection circuit for automotive applications that must survive load dump and high-voltage transient conditions. This EV kit can be configured in overvoltage mode or overvoltage limiter mode by setting jumper J2 (see Table 1 for the jumper settings), and can supply up to 5A of output current.

The MAX6495 EV kit has three positive power-supply inputs: VIN1, VIN2, and VIN3. Inputs VIN2 and VIN3

have diode-based and p-channel MOSFET-based reverse-battery protections, respectively, and VIN1 bypasses all reverse-battery protections.

## Overvoltage Mode

In  overvoltage mode, the MAX6495 monitors the input voltage and turns off the series-pass n-channel MOSFET (M1) when the input voltage exceeds the programmed threshold voltage. As soon as the input voltage drops below the overvoltage threshold, the charge pump of the MAX6495 fully enhances MOSFET M1 to turn the output back on. The voltage-divider formed by R1 and R2 sets the threshold voltage. The resistors provided in the MAX6495 EV kit set the threshold at 17V. If inputs VIN2 or VIN3 are used, this threshold will be higher due to the voltage drop in D1 or M2.

The overvoltage threshold can be adjusted by varying R1 or R2 using the equation below:

<!-- formula-not-decoded -->

where VOV is the desired overvoltage threshold. To maintain threshold accuracy, R2 must be less than 250k Ω . Since the EV kit ships with R2 set at 49.9k Ω , an easy way to change the threshold is to change R1 only, using the formula above.

## Overvoltage Limiter Mode

In overvoltage limiter mode, the MAX6495 monitors the output voltage instead of the input voltage. The output voltage is sensed through the same voltage-divider formed by R1 and R2, so the equation given for overvoltage mode also applies to the threshold voltage in overvoltage limiter mode. During an input overvoltage

## Component Suppliers

| SUPPLIER                           | PHONE        | FAX          | WEBSITE               |
|------------------------------------|--------------|--------------|-----------------------|
| AVX Corp.                          | 602-678-0384 | 602-678-0385 | www.avx.com           |
| Central Semiconductor Corp.        | 516-435-1110 | 516-435-1824 | www.centralsemi.com   |
| Diodes Inc.                        | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Electronic Connector Service, Inc. | 714-895-6351 | 714-894-1858 | www.ecsconn.com       |
| EPCOS                              | 732-906-4300 | 732-603-5935 | www.epcos.com         |
| International Rectifier            | 310-322-3331 | 310-322-3332 | www.irf.com           |
| Murata Mfg. Co., Ltd.              | 770-436-1300 | 770-436-3030 | www.murata.com        |
| STMicroelectronics                 | 408-452-8585 | 408-452-1549 | www.st.com            |
| TDK Corp.                          | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Vishay                             | 402-563-6866 | 402-563-6296 | www.vishay.com        |

Note: Indicate that you are using the MAX6495 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

transient in  this  mode,  the  MOSFET switches off until the output voltage falls to 95% of the threshold voltage, and then the MOSFET switches back on. This cycle repeats, generating a sawtooth waveform on the output.

The minimum output voltage in overvoltage limiter mode depends on load current, output capacitance, and the MOSFET's switching period. The MAX6495 EV kit comes with one 22µF capacitor at the output to supply  the  load  during  the  time  when  the  MOSFET  is  off. Connect the optional electrolytic capacitor C13 (150µF, 100V) to support load currents higher than 0.5A when the EV kit operates in overvoltage limiter mode.

Add capacitor C3 on the gate of MOSFET M1 to decrease the frequency of the sawtooth waveform. This process helps limit the device's power dissipation.

## Jumper Selection

To filter fast transients that may be present at the input from reaching the MAX6495, place a small resistor, R4, (10 Ω , for example) on the board, and cut jumper J1.

<!-- image -->

## MAX6495 Evaluation Kit

Three-pin jumper J2 selects between overvoltage mode and overvoltage limiter mode; do not leave this jumper unconnected. Three-pin jumper J3 controls the gate drive of p-channel MOSFET M3 used as a reverse-battery protection. Use J3 to disconnect resistor R5 when M3 is not used to avoid supply leakage through R5. Three-pin jumper J4 controls the SHDN pin of the MAX6495 and can enable or disable the MOSFET M1 enhancement. Table 1 lists the jumper options.

## Table 1. Jumper Function

| JUMPER   | SHUNT POSITION AND FUNCTION        | SHUNT POSITION AND FUNCTION        |
|----------|------------------------------------|------------------------------------|
| JUMPER   | 1-2                                | 2-3                                |
| J1       | Shorted: RC input filter disabled* | Shorted: RC input filter disabled* |
| J2       | Overvoltage mode*                  | Overvoltage limiter mode           |
| J3       | M2 gate drive is disabled*         | M2 gate drive is enabled           |
| J4       | U1 is enabled*                     | U1 is disabled                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6495 Evaluation Kit

Figure 1. MAX6495 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6495 Evaluation Kit

<!-- image -->

Figure 2. MAX6495 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6495 Evaluation Kit

Figure 3. MAX6495 EV Kit PCB Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6495 Evaluation Kit

Figure 4. MAX6495 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-7

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Boblet

7