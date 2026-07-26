<!-- lastmod 2022-08-05 -->
## General Description

The MAX5908 evaluation kit (EV kit) is a fully assembled and tested surface-mount, dual hot-swap controller circuit  board that provides current-limiting and Variable Speed/Bilevel™ fault protection. The circuit uses a MAX5908 IC in a 16-pin QSOP package and is configurable for an input range of +1.0V to +13.2V.

The EV kit is configured for +5V and +1.8V inputs. Both inputs are configured for up to 10A of output current. The MAX5908 controls two N-channel MOSFETs and provides current regulation during startup for both inputs.  Several  configurations  allow  the  MAX5908 IC's unique current-regulation architecture to be tailored to the application. The current-limiting and short-circuit protection features are configurable and demonstrate the various features of the MAX5908.

The EV kit features several configurations for the startup timer setting, current limit, and output-voltage monitoring. The EV kit also provides power-on sequencing for the outputs. The EV kit can also be used to evaluate a MAX5906, MAX5907, or MAX5909 after replacing the MAX5908 with the desired IC. Additionally, the EV kit can be reconfigured to emulate a dual MAX5904 or MAX5905 hot-swap controller design.

Variable Speed/Bilevel is a trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1, C2, C6    |     3 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG      |
| C3, C4        |     2 | 1000µF, 16V OS-CON capacitors (H case) Sanyo 16SA1000M                        |
| C5            |     0 | Not installed capacitor (H case)                                              |
| C7, C8        |     0 | Not installed capacitors (0805)                                               |
| D1, D2        |     2 | 3A, 30V Schottky diodes (M-flat) Toshiba CMS02                                |
| R1, R2        |     2 | 0.0025 Ω ± 5% 1W sense resistors (2512) Dale/Vishay WSL2512 0.0025 Ω ± 5% R86 |

- ♦
- Input Voltage +5V, VIN1 (as configured)
- +1.8V, VIN2 (as configured)
- ♦ Outputs Configured for +5V and +1.8V (configurable from +1.0V to +13.2V)
- ♦ Configured to 10A Output Current Capability (both channels)
- ♦ 25mV Current-Limit Threshold (10A)
- ♦ Demonstrates Unique Current-Regulation Architecture
- ♦ Configurable Startup Timer
- ♦ Configurable Current Limits
- ♦ Configurable Output Over/Undervoltage Monitoring (both channels)
- ♦ Power-On Sequencing
- ♦ Evaluates MAX5906, MAX5907, MAX5909 (IC replacement required)
- ♦ Emulates MAX5904, MAX5905
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX5908EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                             |
|------------------|-------|---------------------------------------------------------|
| R3, R4           |     2 | 20k Ω ± 1% resistors (0805)                             |
| R5               |     1 | 732k Ω ± 1% resistor (0805)                             |
| R6, R8, R10, R14 |     4 | 100k Ω ± 1% resistors (0805)                            |
| R7               |     1 | 200k Ω ± 1% resistor (0805)                             |
| R9               |     1 | 31.6k Ω ± 1% resistor (0805)                            |
| R11              |     1 | 4.02k Ω ± 1% resistor (0805)                            |
| R12              |     1 | 7.87k Ω ± 1% resistor (0805)                            |
| R13              |     1 | 124k Ω ± 1% resistor (0805)                             |
| R15              |     1 | 1k Ω ± 5% resistor (0805)                               |
| N1, N2           |     2 | 30V 100A N-channel MOSFETs (D 2 PAK) Fairchild FDB7030L |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX5908 Evaluation Kit

## Component List (continued)

| DESIGNATION                                      |   QTY | DESCRIPTION                    |
|--------------------------------------------------|-------|--------------------------------|
| SW1                                              |     1 | SPST switch                    |
| VIN1, PGND, VIN2, PGND, VOUT1, PGND, VOUT2, PGND |     8 | Uninsulated banana jacks       |
| JU1, JU2, JU6, JU7                               |     4 | 3-pin headers                  |
| JU3, JU4, JU5, JU8                               |     4 | 2-pin headers                  |
| None                                             |     8 | Shunt (JU1-JU5, JU6, JU7, JU8) |
| U1                                               |     1 | MAX5908EEE (QSOP-16)           |
| None                                             |     1 | MAX5908 data sheet             |
| None                                             |     1 | MAX5908 EV kit data sheet      |

## Quick Start

The MAX5908 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## MAX5908 Configuration: +5V and +1.8V, 10A Outputs

- 1) Verify  that  shunts  are  on  pins  1  and  2  of  jumpers JU1 (MON1) and JU2 (MON2).
- 2) Verify that shunts are on jumpers JU3 (LIM1, 10A) and JU4 (LIM2, 10A).
- 3) Verify  that  shunts  are  on  pins  2  and  3  of  jumpers JU6 and JU7 (TIM).
- 4) Verify  that  a  shunt  is  not  installed  on  jumpers  JU5 (OUTC) and JU8 (ON).
- 5) Utilizing  very  short  10A rated banana leads (&lt;6 inches long) connect the +5V and +1.8V DC power supplies to the VIN1 and VIN2 banana jacks, respectively. Utilizing very short 10A rated banana leads (&lt;6 inches long) connect the supply grounds to the GND banana jacks.
- 6) Connect a voltmeter to the VOUT1 and GND pads.
- 7) Turn on both power supplies and verify that the voltage at VOUT1 is +5V.
- 8) Verify that the voltage at VOUT2 is +1.8V.
- 9) Pressing push-button SW1 will disable both outputs. The output voltages VOUT1 and VOUT2 will drop when a load is connected to them.
- 10) Test points 1 and 2 (TP1, TP2) are provided to observe the MOSFET gate (N1, N2) voltage with an oscilloscope.

Note: The banana leads connecting the power supply and the load to the EV kit must be very short (&lt;6 inches long) and rated for at least 10A of current.

## Detailed Description

The MAX5908 evaluation kit (EV kit) is a dual hot-swap controller circuit board configured for a +5V input (VIN1) and +1.8V input (VIN2). Both inputs have separate and independent current-limiting and Variable Speed/Bilevel fault protection.

The EV kit uses a MAX5908 IC in a 16-pin QSOP package to control both sides of the circuit. The EV kit can be reconfigured for any input voltage between +1.0V to +13.2V.

The MAX5908 IC controls the +5V side N-channel MOSFET (N1) and provides current regulation during startup.  The  current-limit  threshold  level  is  configured for 10A. It can be reconfigured to 12A by using jumper JU3. For other current-limit threshold levels, refer to the MAX5908 IC data sheet for instructions. The +5V outputvoltage monitoring can be disabled by jumper JU1. PC board pads are provided for an external capacitor (C7) to  increase  the  MOSFET (N1) gate turn-on time. Test point TP1 can be used with an oscilloscope to view the gate voltage.

The MAX5908 IC controls the +1.8V side N-channel MOSFET (N2) and provides current regulation during startup.  The  current-limit  threshold  level  is  configured for 10A. It can be reconfigured to 12A by using jumper JU4. The +1.8V output-voltage monitoring can be dis-

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Dale/Vishay | 402-564-3131 | 402-563-6296 | www.vishay.com        |
| Fairchild   | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo USA   | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| Toshiba     | 949-455-2000 | 949-859-3963 | www.toshiba.com       |

Note: Please indicate that you are using the MAX5908 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

abled by jumper JU2. PC board pads are provided for an external capacitor (C8) to increase the MOSFET (N2) gate turn-on time. Test point TP2 can be used with an oscilloscope to view the gate voltage. The MAX5908 uncommitted comparator (JU5, JU6) can be reconfigured for other uses.

Three configurable startup timer settings (JU7) and a power-on delay capacitor (C6, JU8) provide several choices for evaluating different hot-swap designs. The MAX5908's open-drain PGOOD pin signal is provided at the PGOOD pad on the EV kit. To evaluate a MAX5906, MAX5907, or MAX5909, order the desired IC from Maxim's samples department and replace the MAX5908 with the desired IC. The EV kit can also be reconfigured to emulate a dual MAX5904 or MAX5905 hot-swap controller.

## Jumper Selection

Several jumper selections in the following tables display the functions provided by the MAX5908 EV kit.

## +5V Output-Voltage Monitoring (VOUT1)

The MAX5908 EV kit features an overvoltage and undervoltage monitor circuit for the +5V output. If the +5V output voltage is ≥ +25% (+6.25V) or ≤ -10% (+4.5V), the MAX5908 will pull the PGOOD pin low. When  a  MAX5906  or  MAX5907  IC  is  installed, MOSFETs N1 and N2 will also be turned off by the circuit.  Jumper JU1 is provided to disable this feature. Table 1 lists the various jumper options.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | MON1 PIN                  | MONITORING PGOOD                                 |
|------------------|---------------------------|--------------------------------------------------|
| 1 and 2          | Connected to VIN1         | Disable VOUT1 output-voltage monitoring function |
| 2 and 3          | Connected to VOUT1 via R5 | Enable VOUT1 output-voltage monitoring           |

## +1.8V Output-Voltage Monitoring (VOUT2)

The MAX5908 EV kit features an overvoltage and undervoltage monitor circuit for the +1.8V output. If the +1.8V output voltage is ≥ +25% (+2.25V) or ≤ -10% (+1.62V), the MAX5908 will pull the PGOOD pin low. When  a  MAX5906  or  MAX5907  IC  is  installed, MOSFETs N1 and N2 will also be turned off by the circuit.  Jumper JU2 is provided to disable this feature. Table 2 lists the various jumper options.

<!-- image -->

## MAX5908 Evaluation Kit

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | MON2 PIN                  | MONITORING PGOOD                                 |
|------------------|---------------------------|--------------------------------------------------|
| 1 and 2          | Connected to VIN2         | Disable VOUT2 output-voltage monitoring function |
| 2 and 3          | Connected to VOUT2 via R7 | Enable VOUT2 output-voltage monitoring           |

## +5V Slow-Comparator Current Limit (VOUT1)

The MAX5908 EV kit features a 2-pin jumper (JU3) to change the slow-comparator current-limit threshold level for the +5V output. Table 3 lists the jumper options.

Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | LIM1 PIN         | EV KIT MODE                                                 |
|------------------|------------------|-------------------------------------------------------------|
| Installed        | Connected to GND | VOUT1 slow- comparator current limit set to 25mV (10A trip) |
| None             | Connected to R3  | VOUT1 slow- comparator current limit set to 30mV (12A trip) |

## +1.8V Slow-Comparator Current Limit (VOUT2)

The MAX5908 EV kit features a 2-pin jumper (JU4) to change the slow-comparator current-limit threshold level  for  the  +1.8V  output.  Table  4  lists  the  jumper options.

## Table 4. Jumper JU4 Functions

| SHUNT LOCATION   | LIM2 PIN         | EV KIT MODE                                                 |
|------------------|------------------|-------------------------------------------------------------|
| Installed        | Connected to GND | VOUT2 slow- comparator current limit set to 25mV (10A trip) |
| None             | Connected to R4  | VOUT2 slow- comparator current limit set to 30mV (12A trip) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5908 Evaluation Kit

## Comparator Output Configuration

The MAX5908 EV kit features a 2-pin jumper (JU5) to reconfigure the MAX5908's uncommitted comparator output (OUTC) destination. Table 5 lists the jumper options.

Table 5. Jumper JU5 Functions

| SHUNT LOCATION   | JU6 LOCATION   | OUTC PIN                         | EV KIT MODE                                        |
|------------------|----------------|----------------------------------|----------------------------------------------------|
| None             | See Table 6    | Connected to OUTC pad only       | Comparator set for external use, open-drain output |
| Installed        | 2 and 3        | Connected to ON pin and OUTC pad | MAX5908 OFF until VIN2 > 1.62V                     |

## Comparator Input Configuration

The MAX5908 EV kit features a 3-pin jumper to reconfigure  the  MAX5908's uncommitted comparator input (INC+) source. Jumper JU6 is used to select the source for the resistor-divider (R9, R10) feeding the comparator or the MAX5908 INC+ pin. Table 6 lists the selectable jumper options.

## Table 6. Jumper JU6 Functions

| SHUNT LOCATION   | INC+ PIN, R9, R10                              | COMPARATOR MODE          |
|------------------|------------------------------------------------|--------------------------|
| 1 and 2          | R_DIV pad supplies voltage                     | Monitor R_DIV voltage    |
| 2 and 3          | VIN2 supplies voltage                          | Monitor VIN2 voltage     |
| None             | INC+ pad supplies voltage, remove resistor R10 | Monitor INC+ pad voltage |

## Startup Timer Setting

The MAX5908 EV kit features several choices for setting the time required to completely turn on the MOSFETs (N1, N2). Jumper JU7 selects the time and Table 7 lists the selectable jumper options to reconfigure the startup timer setting.

## Table 7. Jumper JU7 Functions

| SHUNT LOCATION   | TIM PIN              | EV KIT MODE                 |
|------------------|----------------------|-----------------------------|
| 1 and 2          | TIM connected to R11 | 400µs startup timer setting |
| 2 and 3          | TIM connected to R12 | 800µs startup timer setting |
| None             | TIM floating         | 9ms startup timer setting   |

## ON Pin Delay During Power-Up (VIN1)

The MAX5908 EV kit features a jumper to facilitate power-up sequencing. The jumper sets the response of the MAX5908 ON pin when applying power to the VIN1 input during power-up. Jumper JU8 selects the powerup sequencing mode for the EV kit. Table 8 lists the selectable jumper options.

## Table 8. Jumper JU8 Functions

| SHUNT LOCATION   | ON PIN, R13, R14                            | EV KIT MODE                                                                                        |
|------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------|
| None             | C6 floating                                 | No power-up sequencing: outputs turn on at the same time                                           |
| Installed        | Connected to C6, enable power-up sequencing | Power-up sequencing: after applying power, VOUT1 turns on 2.5ms later, VOUT2 turns on 13.5ms later |

## Control Modes and Other Input Voltages

## Fault Resetting

The MAX5908 EV kit features a push-button switch (SW1) to allow momentary toggling of the ON pin of the MAX5908. The switch will disable the EV kit outputs or unlatches faults when a MAX5907 or MAX5909 IC has been installed on the EV kit. An external controller can be utilized to control the ON pin of the MAX5908 EV kit. Refer to the MAX5904-MAX5909 data sheet for additional functions of the ON pin when toggling or applying a voltage to it.

## MOSFET Gate Control

The MAX5908 EV kit features an option to increase the MOSFET gate (N1, N2) turn-on time. PC board pads are provided for installing a capacitor (C7, C8) to the respective gate-drive pins. Refer to the MAX5904-MAX5909 data sheet for information on selecting the value of the capacitors. Test points TP1 and TP2 are provided to observe the gate-drive voltage with an oscilloscope.

## Evaluating Other Input Voltages (+1V to +13.2V)

The MAX5908 EV kit can evaluate other dual hot-swap controller configuration voltages operating from +1V up to +13.2V. One of the input voltages must be ≥ +2.7V. To evaluate a lower current limit, resistors R3 or R4 must be replaced with a resistor selected for the desired current limit.  The  output-voltage monitoring resistors (R5, R6 or R7, R8) must also be replaced to provide +0.6V at the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

MON1 or MON2 pin at nominal output voltages, respectively.  Refer to the MAX5904-MAX5909 data sheet for information on selecting other current-sense resistors (R1 or R2) and other components.

## Evaluating MAX5906-MAX5909 and MAX5904/MAX5905 Emulation

## Evaluating MAX5906-MAX5909 Dual Hot-Swap Designs

The  MAX5908 EV kit  can  evaluate  a  MAX5906, MAX5907, or MAX5909 dual hot-swap controller circuit design. The MAX5908 must be removed and replaced by the desired IC below. It can be ordered from the phone number listed at the end of the data sheet. Use Table 9 and Tables 1 through 8 to reconfigure the EV kit for the desired functions.

## MAX5908 Evaluation Kit

Table 9. MAX5906-MAX5909 Features

| PART       | OUTPUT UNDERVOLTAGE AND OVERVOLTAGE PROTECTION/MONITORING   | FAULT MANAGEMENT   |
|------------|-------------------------------------------------------------|--------------------|
| MAX5906EEE | Protection                                                  | Auto-Retry         |
| MAX5907EEE | Protection                                                  | Latched            |
| MAX5908EEE | Monitoring                                                  | Auto-Retry         |
| MAX5909EEE | Monitoring                                                  | Latched            |

## Emulating MAX5904 or MAX5905 Dual Hot-Swap Designs

The MAX5908 EV kit can emulate the MAX5904 and MAX5905 IC features. The EV kit uses a MAX5908 IC and properly set jumpers to emulate a MAX5904 design. Consult Tables 10 to emulate a MAX5904 design. Consult the MAX5904-MAX5909 data sheet for a description of specific pin functions on a MAX5904 IC and it's associated external components. To emulate a MAX5905 design, replace the MAX5908 IC with a MAX5907 or MAX5909 IC.

Table 10. Emulating MAX5904/MAX5905 Design (Set Shunt Location per Table)

| JUMPER   | SHUNT LOCATION   | MAX5908 PIN   | MAX5904/5905 EV KIT MODE EMULATED                                                            |
|----------|------------------|---------------|----------------------------------------------------------------------------------------------|
| JU1      | 1 and 2          | MON1          | Disable monitoring output voltage VOUT1, not available on MAX5904/MAX5905                    |
| JU2      | 1 and 2          | MON2          | Disable monitoring output voltage VOUT2, not available on MAX5904/MAX5905                    |
| JU3      | Installed        | LIM1          | VOUT1 slow-comparator current limit set to 25mV (10A trip), fixed at 25mV on MAX5904/MAX5905 |
| JU4      | Installed        | LIM2          | VOUT2 slow-comparator current limit set to 25mV (10A trip), fixed at 25mV on MAX5904/MAX5905 |
| JU5      | None             | OUTC          | Comparator not available on MAX5904/MAX5905                                                  |
| JU6      | 1 and 2          | INC+          | Comparator not available on MAX5904/MAX5905                                                  |
| JU7      | None             | TIM           | 9ms startup timer setting                                                                    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5908 Evaluation Kit

Figure 1. MAX5908 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX5908 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX5908 Evaluation Kit

Figure 3. MAX5908 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX5908 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7