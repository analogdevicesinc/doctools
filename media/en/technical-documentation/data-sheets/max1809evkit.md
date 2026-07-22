<!-- lastmod 2022-08-02 -->
## General Description

The MAX1809 evaluation kit (EV kit) provides a +1.1V output voltage from a +3V to +5.5V input source. It sources and sinks up to 3A of current. The MAX1809 is a step-down switching regulator with an internal synchronous-rectifier that operates up to 1MHz, minimizing external components. The device features a resistorprogrammable, fixed off-time current-mode operation for  superior load- and line-transient response, and achieves efficiencies up to 93%.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                         |
|---------------|-------|-----------------------------------------------------------------------------------------------------|
| C1            |     1 | 33µF, 6.3V, X5R ceramic capacitor TDK C3225XR0J336V                                                 |
| C2, C9        |     0 | Not installed                                                                                       |
| C3            |     1 | 270µF, 2V, 15m Ω ESR SP capacitor Panasonic EEFUE0D271R                                             |
| C4            |     1 | 0.01µF, 50V, X7R ceramic                                                                            |
| C5            |     1 | 2.2µF, 10V, X5R ceramic capacitor Taiyo Yuden LMK212BJ225MG TDK C2012X5R1A225M                      |
| C6            |     1 | 1µF, 10V, X7R ceramic capacitor Taiyo Yuden LMK212BJ105MG Murata GRM40X7R105K010 TDK C2012X5R1C105K |
| C7, C8        |     2 | 1000pF, 50V, C0G ceramic capacitors                                                                 |
| D1, D2        |     0 | Not installed                                                                                       |
| D3            |     1 | Diode Diodes Inc. 1N4148W Fairchild MMSD4148 General Semiconductor 1N4148W                          |

- ♦ ±3A Output Current
- ♦ Up to 1MHz Switching Frequency
- ♦ Up to 93% Efficiency
- ♦ Synchronous Rectification for Improved Efficiency
- ♦ Output Voltage: +1.1V to VIN Adjustable
- ♦ +3V to +5.5V Input Voltage Range
- ♦ Less than 1µA Typical IC Shutdown Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1809EVKIT | 0 ° C to +70 ° C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| JU1, JU2      |     2 | 2-pin headers                                                                        |
| JU3           |     0 | Not installed                                                                        |
| L1            |     1 | 1µH, 3A inductor Sumida 4762-T072 (CDRH6D28 type) Toko A920CY-1R0M (D62CB type)      |
| R1, R2        |     2 | 10k Ω ±1% resistors                                                                  |
| R3            |     1 | 10 Ω ±5%resistor                                                                     |
| R4            |     1 | 1M Ω ±5% resistor                                                                    |
| R5            |     1 | 130k Ω ±1% resistor                                                                  |
| R6            |     1 | 0.012 Ω ±1%, 0.5W sense resistor Vishay Dale WSL-2010-R012F IRC LRC-LR2010-01-R012-F |
| R7            |     1 | 100 Ω ±5% resistor                                                                   |
| R8            |     0 | Not installed                                                                        |
| U1            |     1 | MAX1809EEE (16-QSOP)                                                                 |
| None          |     2 | Shunts for JU1 and JU2                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX1809 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Diodes Inc.           | 805-446-4800 | 805-381-3899 |
| Fairchild             | 888-522-5372 | -            |
| General Semiconductor | 760-804-9258 | 760-804-9259 |
| IRC                   | 361-992-7900 | 361-992-3377 |
| Murata                | 770-436-1300 | 770-436-3030 |
| Nihon                 | 661-867-2555 | 661-867-2698 |
| Panasonic             | 201-392-7522 | 201-392-4441 |
| Sumida                | 847-545-6700 | 847-545-6720 |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 |
| TDK                   | 847-803-6100 | 847-390-4405 |
| Toko                  | 847-297-0070 | 847-699-1194 |
| Vishay Dale           | 402-564-3131 | 402-563-6296 |

Note: Please indicate that you are using the MAX1809 when contacting these suppliers

## Quick Start

The MAX1809 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is on JU1 (shutdown disabled) to enable operation and on JU2 to set the output voltage to +1.1V.
- 2) Connect a voltmeter and load (if any) to VOUT and GND.
- 3) Connect a +3V to +5.5V supply to the pads marked VIN and GND.
- 4) Turn on the power and verify that the output voltage is +1.1V.
- 5)  Refer to the Output Voltage Selection section to modify the board for a different output voltage.

## Detailed Description

The MAX1809 EV kit provides a +1.1V output voltage from a +3V to +5.5V input voltage. It sources or sinks up to 3A of output current. Continuous operation at 3A with high ambient temperatures may be limited due to thermal considerations (see the MAX1809 data sheet).

## Jumper Selection

Jumper JU1 selects the shutdown mode of the MAX1809. Table 1 lists the jumper options. Jumper JU2 connects EXTREF to REF, setting the output voltage of the MAX1809 to +1.1V. Refer to the Output Voltage Selection section.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                           | MAX1809 OUTPUT                  |
|------------------|------------------------------------|---------------------------------|
| Open             | Connected to GND through 1M Ω (R4) | Shutdown mode, V OUT = 0        |
| Closed (Default) | Connected to VIN                   | MAX1809 enabled, V OUT = +1.1V. |

## Output Voltage Selection

The MAX1809 EV kit is shipped with the output voltage set to +1.1V. To change the output voltage, follow the configurations stated in Table 2.

## Table 2. Setting the MAX1809 Output Voltage

| JU2              | CONDITION                                                                            | OUTPUT VOLTAGE              |
|------------------|--------------------------------------------------------------------------------------|-----------------------------|
| Closed (Default) | R7 = 100 Ω , R8 = open                                                               | V OUT = +1.1V               |
| Closed           | R7 = 10k Ω , R8 = installed                                                          | V OUT = +1.1V x (1 + R7/R8) |
| Open             | R7 = 100 Ω , R8 = open; external voltage applied to the pads labeled EXTREF and AGND | V OUT = V EXTREF            |
| Open             | R7 = 100 Ω , R8 = open; external voltage applied to the pads labeled VDD and AGND    | V OUT = V DD /2             |

When the shunt at JU2 is removed, observe the voltage limits  on  EXTREF as recommended in the MAX1809 data sheet. Failure to observe these limits can cause the part to enter abnormal operating conditions and might cause the part to be damaged.

For output voltages above +1.6V, replace capacitor C3 with a higher voltage rated capacitor.

R7 is set at 100 Ω for configurations that do not use R8 to  adjust  the  output  voltage. This 100 Ω allows the MAX1809 to power up into a sinking current mode. Refer to the MAX1809 data sheet for a detailed description of this function.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Note: The switching frequency of the MAX1809 EV kit is 600kHz when the input voltage is +5V and the output voltage is +1.1V. This frequency will change when the input or output voltages change. When operated from a +3.3V input voltage, the switching frequency will be 450kHz. Do not operate the MAX1809 above 1MHz. To set  the  switching  frequency,  change the tOFF resistor (R5) and the inductor. Refer to the MAX1809 data sheet to determine the values.

## Test Setup

In  applications that require active termination, the MAX1809 is required to both source and sink current. Figures 1 and 2 below show how to set up the MAX1809 EV kit for sourcing and sinking current.

For sourcing-mode test setup (Figure 1), connect an external load to the pads labeled VOUT and GND.

<!-- image -->

Figure 1. Test Setup (Sourcing)

<!-- image -->

Figure 2. Test Setup (Sinking)

<!-- image -->

## MAX1809 Evaluation Kit

In  the  sinking-mode test setup (Figure 2), beware of back-biasing the EV kit with too high a voltage during the turn-on sequence. The supply to the EV kit (VDC1) must be powered on before the supply is connected to the load (VDC2). Failure to do so will result in permanent damage to the evaluation kit. Also, do not source current  to  the  load  supply  (VDC2)  as  it  can  damage  that supply.

Follow these procedures when conducting a sinkingmode test:

- 1) Disconnect the load from the output of the MAX1809 EV kit.
- 2) Connect a preload across VIN and GND. Use the following equation to determine the minimum required preload current.

<!-- formula-not-decoded -->

- 3) Power up the MAX1809 EV kit.
- 4) Set the load at the highest impedance.
- 5)  Set  the  load  supply  (VDC2)  to  the  same  voltage  as the output of the MAX1809 EV kit.
- 6) Connect the load to the output of the MAX1809 EV kit (VOUT and GND).
- 7) Adjust the load and increase VDC2 until the desired sinking current is reached.

Before powering down the MAX1809, disconnect the load from the output of the MAX1809 EV kit to prevent driving a high voltage into the output of the MAX1809 while it is off.

## Load Transient Experiment

One interesting experiment is to subject the output to fast  load  transients.  Most  benchtop electronic loads intended for power-supply testing lack the ability to subject the DC-DC converter to ultra-fast load transients. Emulating the termination supply's fast di/dt requires at least 10A/µs load transients. An easy method for generating such an abusive load transient is to  solder  a  MOSFET, such as an MTP3055 or 12N05, directly across VOUT and GND. Then drive its gate with a strong pulse generator at a low duty cycle (=10%) to minimize heat stress in the MOSFET. Adjust the highlevel output voltage of the pulse generator to vary the load current. Alternatively, control the load current with a load resistor in series with the MOSFET's drain, and drive the MOSFET fully on. Remember to include the expected on-resistance of the MOSFET in the load resistor calculation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1809 Evaluation Kit

To perform a fast transient test that goes from sourcing mode to sinking mode and back, first arrange the setup as in the sinking mode. Add the dummy MOSFET from VOUT to GND as described in the previous paragraph. Power up the MAX1809 and set the sinking current to the desired level, then use the pulse generator to pull the appropriate sourcing current through the dummy MOSFET. In this situation, the dummy MOSFET will be sinking both the external sinking current and the sourcing current from the output of the MAX1809. As an example, if the transient is required to go from -1A (sinking)  to  +2A  (sourcing),  then  the  dummy  MOSFET needs to sink +3A when it is turned on. Figure 3 illustrates this setup.

Figure 3. Load Transient Setup

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note: Do not place a current meter in the load path to determine the load current because the additional resistance and inductance will interfere with fast load transients. It is best to observe the inductor current with a calibrated AC-current probe, such as a Tektronix AM503. In the buck topology, the load current is equal to the average value of the inductor current.

The MAX1809 EV kit is optimized to handle load transients  from  -2A  to  +2A.  For  load  steps  that  are  larger than 4A total, refer to the MAX1809 data sheet to calculate the required inductance and output capacitance.

## Optimizing for +3.3V Input Supplies

The components selected for the MAX1809 EV kit are optimized for an input voltage of +5V. When operating from a +3.3V input supply, change L1 to 0.68µH (Murata LQS66CR68M04M00) and R5 to 73.2k Ω ±1%. This increases the switching frequency to 810MHz when sourcing current and to 970MHz when sinking current.

## Improving Efficiency

The MAX1809 EV kit has footprints for Schottky diodes across the internal PMOS and NMOS. For lowest cost implementation, these Schottky diodes can be omitted. For maximum efficiency, place a 0.5A low-leakage Schottky, such as Nihon EP5Q03L, in positions D1 and D2.

<!-- image -->

## MAX1809 Evaluation Kit

<!-- image -->

Figure 4. MAX1809 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1809 Evaluation Kit

<!-- image -->

Figure 5. MAX1809 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 7. MAX1809 EV Kit PC Board Layout-Solder Side

Figure 6. MAX1809 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 8. MAX1809 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6