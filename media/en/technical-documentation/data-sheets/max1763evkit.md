<!-- lastmod 2022-08-04 -->
## General Description

The MAX1763 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  contains two separate boost switching-regulator circuits. The first circuit (left side) utilizes a MAX1763 in a 16-pin QSOP package and is configured for a +3.3V output that accepts inputs from a +0.7V to VOUT source and provides up to 1.1A of current. A 1- or 2-cell alkaline battery source can also power the input.

The second circuit (right side) uses a MAX1763 in a high-power 16-pin TSSOP-EP (exposed pad) package, is  configured for a +3.3V output, and supplies up to 1.4A of current. It accepts inputs from a +0.7V to +5.5V source, or a 1- or 2-cell alkaline battery can power the input. The right side includes a low-dropout (LDO) linear regulator that draws power from the +3.3V output and provides +2.8V at up to 1A of current.

The MAX1763 features an internal n-channel MOSFET switch, a P-channel MOSFET synchronous rectifier, and pulse-width modulation (PWM) operation for maximum efficiency. The MAX1763 EV kit demonstrates low quiescent current and high efficiency up to 96% for maximum battery life. Operation at 1MHz allows the use of tiny surface-mount components.

| DESIGNATION                |   QTY* | DESCRIPTION                                                                                   |
|----------------------------|--------|-----------------------------------------------------------------------------------------------|
| C1, C11                    |      2 | 33µF, 16V low-ESR electrolytic capacitors (POSCAP) Sanyo 16TPC33M                             |
| C2, C3, C12, C13           |      4 | 100µF, 6.3V low-ESR electrolytic capacitors (POSCAP) Sanyo 6TPC100M                           |
| C4                         |      1 | 68µF, 10V low-ESR electrolytic capacitor (POSCAP) Sanyo 10TPC68M                              |
| C5, C8, C10, C14, C15, C18 |      6 | 1µF, 10V X5R ceramic caps (0805) Murata GRM219R61A105M or Taiyo Yuden LMK212BJ105MG           |
| C6, C16                    |      2 | 0.22µF, 25V X7R ceramic capacitors (1206) Panasonic ECJ3VB1E224K or Taiyo Yuden TMK316BJ224KF |

## Component List

| DESIGNATION                           |   QTY* | DESCRIPTION                                                                                     |
|---------------------------------------|--------|-------------------------------------------------------------------------------------------------|
| C7, C9, C17, C19                      |      0 | Not installed (0805)                                                                            |
| D1                                    |      1 | 2.2A, 40V Schottky diode Nihon EC31QS04                                                         |
| D2                                    |      0 | 2.2A, 40V Schottky diode; not installed, but recommended for low-voltage startup Nihon EC31QS04 |
| JU1-JU8                               |      8 | 3-pin headers                                                                                   |
| L1, L2                                |      2 | 1.5µH inductors Coilcraft DS3316P-152MLD                                                        |
| P1                                    |      1 | -20V, 4.5A P-channel MOSFET (SuperSOT-6) Fairchild Semiconductor FDC638P_NL                     |
| R1, R2, R3, R6, R7, R9, R10, R14, R15 |      0 | Not installed (0805)                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

- ♦ +0.7V to +5.5V Input Range
- ♦ Output Voltages
- +3.3V Fixed Output at 1.1A (left side)
- +3.3V Fixed Output at 1.4A (right side)
- +2.8V LDO Linear Regulator Output at 1A (right side) as Shipped
- ♦ Internal N-Channel Power Switch and P-Channel Synchronous Rectifier
- ♦ 1µA Shutdown Current
- ♦ 1MHz Switching Frequency
- ♦ Externally Synchronizable (500kHz to 1.2MHz)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART               | TEMP RANGE IC PACKAGE               |
|--------------------|-------------------------------------|
| 0°C to +70°C*      | MAX1763EVKIT 16 QSOP, 16 TSSOP-EP** |
| MAX1763EVKIT + 0°C | to +70°C* 16 QSOP, 16 TSSOP-EP**    |

## MAX1763 Evaluation Kit

| DESIGNATION R4   |   QTY* 1 | DESCRIPTION 100k Ω ±1% resistor (0805)   |
|------------------|----------|------------------------------------------|
| R5, R13          |        2 | 4.7 Ω ±5% resistors (0805)               |
| R8               |        1 | 20k Ω ±5% resistor (0805)                |
| R11              |        1 | 182k Ω ±1% resistor (0805)               |
| R12              |        1 | 90.9k Ω ±1% resistor (0805)              |

## Component List (continued)

| DESIGNATION   |   QTY* | DESCRIPTION                   |
|---------------|--------|-------------------------------|
| R16           |      1 | 100k Ω ±5% resistor (0805)    |
| U1            |      1 | MAX1763EEE+ (16-pin QSOP)     |
| U2            |      1 | MAX1763EUE+ (16-pin TSSOP-EP) |
| -             |      8 | Shunts for JU1-JU8            |
| -             |      1 | PCB: MAX1763 Evaluation Kit   |

## Component Suppliers

| SUPPLIER                      | PHONE        | WEBSITE               |
|-------------------------------|--------------|-----------------------|
| Coilcraft, Inc.               | 847-639-6400 | www.coilcraft.com     |
| Fairchild Semiconductor       | 408-822-2000 | www.fairchildsemi.com |
| Murata Mfg. Co., Ltd.         | 770-436-1300 | www.murata.com        |
| Nihon Inter Electronics Corp. | 661-867-2555 | www.niec.co.jp        |
| Panasonic Corp.               | 714-373-7366 | www.panasonic.com     |
| SANYO North America Corp.     | 619-661-6835 | www.sanyodevice.com   |
| Taiyo Yuden                   | 800-348-2496 | www.t-yuden.com       |

Note: Indicate that you are using the MAX1763 when contacting these component suppliers.

## Quick Start

## Procedure

The MAX1763 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all

connections are completed.

## +3.3V Output Low Power (left side)

- 1) Connect a +1.1V to +3.2V supply to the VIN pad; connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the left-side POUT pad.
- 3) Verify  that  jumpers JU1 ( ONB )  and  JU4 (battery monitor) have shunts across pins 2-3 on each jumper.
- 4) Verify that jumpers JU2 (ONA) and JU3 (CLK/SEL) have shunts across pins 1-2 on each jumper.
- 5) Turn on the power supply and verify that the output (POUT) is +3.3V.

For instructions on selecting other output voltages at POUT, see the Evaluating Other Output Voltages at POUT section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3.3V High-Power Output (right side)

- 1) Connect a +1.1V to +3.2V supply to the VIN pad; connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the POUT pad.
- 3) Verify  that  jumper  JU5  ( ONB )  has  a  shunt  across pins 2-3.
- 4) Verify that jumpers JU6 (ONA), JU7 (CLK/SEL), and JU8 (LDO) have a shunt across pins 1-2 on each jumper.
- 5) Turn on the power supply and verify that the main output voltage (POUT) is +3.3V.
- 6) Verify  that  the  LDO  linear  regulator  output  voltage (VOUT) is +2.8V.

For instructions on selecting other main output voltages (POUT), see the Evaluating Other Output Voltages at POUT section. To evaluate linear output current levels above 1A, see the Linear Output and +3.3V Output Powe r section.

## Detailed Description

The MAX1763 EV kit contains two separate boost switching-regulator circuits using different package technologies. Both circuits provide a +3.3V output.

The left circuit requires a +0.7V to VOUT input voltage range. The +3.3V output supplies up to 1.1A of current. A low-battery detection circuit is included, which requires selection of a resistor and a configuration jumper change (JU4) to enable the circuit. Figure 1 is the MAX1763 EV kit schematic for the left side.

The right circuit requires a +1.1V to VOUT input voltage range and its +3.3V output supplies up to 1.4A of current. An LDO linear regulator circuit draws power from the  +3.3V output and can supply up to 1A of current. The total current drawn from the main output (POUT) and the LDO linear regulator output (VOUT) must not exceed 1.4A. Figure 2 is the MAX1763 EV kit schematic for the right side.

The output voltage (POUT) on both circuits can be adjusted for a range of +2.5V to +5.5V with external resistors. Resistors R1 and R2 adjust the left-side POUT voltage, while R9 and R10 adjust the right-side POUT voltage. The input voltage range is from +1.1V to (VPOUT) from a DC source or batteries.

## Jumper Selection

The MAX1763 EV kit features jumpers that provide several  options,  such as shutdown mode, CLK/SEL settings, battery monitor, and LDO linear regulator configurations.

## Shutdown Mode (MAX1763, left side)

The MAX1763 EV kit features a shutdown mode that typically reduces the MAX1763 quiescent current to less than 1µA, preserving battery life. The 3-pin jumpers, JU1 and JU2, select the shutdown mode for the MAX1763. Tables 1 and 2 list the selectable jumper options.

## Shutdown Mode High Power (MAX1763, right side)

The MAX1763 EV kit features a shutdown mode that typically reduces the MAX1763 high-power side quiescent current to less than 1µA, thus preserving battery life.  The  3-pin  jumpers,  JU5  and  JU6,  select  the  shutdown mode for the MAX1763 high-power side. Table 3 lists the selectable jumper options.

CLK/SEL Mode (MAX1763 left and right sides) Jumpers JU3 and JU7 control the CLK/SEL pin operating mode for the left- and right-side circuits, respectively.  Options  include  low  noise-forced  PWM mode, normal mode, and an external clock source to drive the CLK/SEL pin. The external clock source must operate in the 500kHz to 1200kHz range. Table 4 lists the CLK/ SEL jumper options.

<!-- image -->

## MAX1763 Evaluation Kit

## Table 1. Jumper JU1 Function

| SHUNT POSITION   | ONB PIN           | MAX1763 OUTPUT                       |
|------------------|-------------------|--------------------------------------|
| 1-2              | Connected to POUT | Shutdown mode, POUT = V IN - V DIODE |
| 2-3              | Connected to GND  | MAX1763 enabled, POUT = +3.3V        |

Table 2. Jumper JU2 Function

| SHUNT POSITION   | ONB PIN           | MAX1763 OUTPUT                       |
|------------------|-------------------|--------------------------------------|
| 1-2              | Connected to POUT | Shutdown mode, POUT = V IN - V DIODE |
| 2-3              | Connected to GND  | MAX1763 enabled, POUT = +3.3V        |

Table 3. Jumper JU5 and JU6 Functions

| JU5 SHUNT POSITION   | ONB PIN   | JU6 SHUNT POSITION   | ONA PIN   | MAX1763 OUTPUT             |
|----------------------|-----------|----------------------|-----------|----------------------------|
| 2-3                  | GND       | 2-3                  | GND       | On, VOUT = 3.3V            |
| 2-3                  | GND       | 1-2                  | POUT      | On, VOUT = 3.3V            |
| 1-2                  | POUT      | 2-3                  | GND       | Off, VOUT = V IN - V DIODE |
| 1-2                  | POUT      | 1-2                  | POUT      | On, VOUT = 3.3V            |

## Table 4. Jumpers JU3, JU7 Functions

| SHUNT POSITION   | CLK/SEL PIN                    | MAX1763 OUTPUT                                                  |
|------------------|--------------------------------|-----------------------------------------------------------------|
| 1-2              | Connected to VOUT              | Forced PWM mode: PWM operation at all loads                     |
| 2-3              | Connected to GND               | Normal mode: PFM at light load and PWM at medium and heavy load |
| -                | Clock connected to CLK/SEL pad | PWM mode synchronized to external 500kHz to 1200kHz range clock |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1763 Evaluation Kit

## Table 5. Jumper JU4 Function

| SHUNT POSITION   | CLK/SEL PIN                           | BATTERY MONITOR   |
|------------------|---------------------------------------|-------------------|
| 1-2              | Connected to resistor dividers R3, R4 | Enabled           |
| 2-3              | Connected to OUT                      | Disabled          |

## Table 6. Jumper JU8 Function

| SHUNT POSITION   | CLK/SEL PIN                             | VOUT PAD                               |
|------------------|-----------------------------------------|----------------------------------------|
| 1-2              | Connected to resistor dividers R11, R12 | Linear regulator enabled, VOUT = +2.8V |
| 2-3              | Connected to OUT                        | Linear regulator disabled, VOUT = 0V   |

## Battery Monitor Enable (MAX1763, left side)

The MAX1763 EV kit low-power side features a shutdown mode for the battery monitor and internal gain block to reduce quiescent current, thus preserving battery  life.  The  3-pin  jumper,  JU4,  selects  the  shutdown mode for  the  battery  monitor  gain  block  in  the MAX1763. Table 5 lists the selectable jumper options.

## LDO Linear Regulator Enable (MAX1763, right side)

The MAX1763 EV kit high-power side features a shutdown mode for the LDO linear regulator and internal gain block to reduce quiescent current, thus extending battery life. The 3-pin jumper, JU8, selects the shutdown mode for the LDO linear regulator on the MAX1763 EV kit. Table 6 lists the selectable jumper options.

## Evaluating Other Output Voltages at POUT (left and right sides)

The MAX1763 main outputs (POUT) are set to +3.3V by feedback resistors (R2 and R10). To generate output voltages other than +3.3V (+2.5V to +5.5V), select different external voltage-divider resistors (R1, R2 left side and R9, R10 right side). Refer to the Setting the Output Voltage section in the MAX1763 IC data sheet for instructions on selecting the resistors.

## Setting the Battery Monitor Voltage (left side)

Resistor R3 must be installed before enabling the battery monitor jumper JU4. Calculate the resistor value as follows:

<!-- formula-not-decoded -->

where VTH is the desired input trip threshold, VREF is 0.938V, and R4 is 100k Ω as shipped. R4 can range in value up to 270k Ω if  desired.  Refer  to  the Gain Block section of the MAX1763 IC data sheet. See also the Battery Monitor Enable section to enable the battery monitor circuit using jumper JU4.

## Reconfiguring the Battery Monitor (left side)

The MAX1763 battery monitor circuit can be reconfigured, allowing the MAX1763's internal gain block to be used for other purposes. The PCB traces shorting across JU9 and JU10 must be cut open, separating the battery monitor circuit. See the Battery Monitor Enable section to disable the MAX1763 gain block with jumper JU4. Refer to the Gain Block section in the MAX1763 IC data sheet for instructions on utilizing the gain block for other purposes.

## Linear Output and +3.3V Output Power (right side, VOUT, POUT)

The MAX1763 EV kit's LDO linear regulator (right side), as shipped, can supply +2.8V at up to 1A of current at the VOUT pad. This power is obtained from the +3.3V, 1.4A rated POUT circuit. Supplying current from the VOUT pad will diminish the available current at POUT as follows:

Available current at POUT = 1.4A - (LDO linear regulator output load current)A

## Reconfiguring the LDO Linear Regulator (right side)

The MAX1763 EV kit's LDO linear regulator circuit can be reconfigured, allowing the MAX1763 internal gain block to be utilized for other purposes. The PCB traces shorting across JU11 and JU12 must be cut open, separating the LDO linear regulator circuit. See the LDO Linear  Regulator  Enable section  to  disable  the MAX1763 gain block with jumper JU8. Refer to the Gain Block section in the MAX1763 IC data sheet for instructions on utilizing the gain block for other purposes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1763 Evaluation Kit

Figure 1. MAX1763 EV Kit Schematic (left side, QSOP package)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1763 Evaluation Kit

Figure 2. MAX1763 EV Kit Schematic (right side, TSSOP-EP package)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1763 Evaluation Kit

<!-- image -->

Figure 3. MAX1763 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX1763 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1763 Evaluation Kit

Figure 5. MAX1763 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX1763 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-6, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600