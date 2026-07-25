<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16802B evaluation kit (EV kit) demonstrates a current-controlled, high-output-current LED driver based on the MAX16802B. This EV kit is capable of supplying stable output currents of up to 750mA, can run at supply voltages between 10.8V and 30V, and can operate at temperatures ranging from -40°C to +85°C.

The MAX16802B EV kit features two different types of dimming controls using either a linear input voltage or a PWM input signal to control the LED brightness. This EV kit also has a UVLO feature to turn off the EV kit operation during low input supply voltage and an overvoltage protection to protect the EV kit under an open-LED condition. The MAX16802B EV kit is a fully assembled and tested board.

Warning: Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or  of  component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

| DESIGNATION    |   QTY | DESCRIPTION                                                                           |
|----------------|-------|---------------------------------------------------------------------------------------|
| C1, C2, C5, C6 |     4 | 4.7µF, 50V X7R ceramic capacitors Murata GRM32ER71H475KA88L                           |
| C3, C4, C7     |     3 | 0.1µF, 50V X7R SMD ceramic capacitors Murata GRM188R71H104KA93D or TDK C1608X7R1H104K |
| C8             |     1 | 470pF, 50V X7R ceramic capacitor Murata GRM188R71H471KA01D or TDK C1608X7R1H471K      |
| C9             |     1 | 1nF, 50V X7R ceramic capacitor Murata GRM188R71H102KA01D or TDK C1608X7R1H102K        |
| D1             |     1 | 22V, 1.5W zener diode Vishay SMZG3797B                                                |
| D2             |     1 | 60V, 1A Schottky diode Central Semiconductor CMSH1-60M or Diodes Inc. B160            |
| D3             |     1 | 20V, small-signal Schottky diode Vishay SD103CWS or Diodes Inc. SD103CWS              |
| J1, J2         |     2 | 0.1in, 2-pin hole headers (through hole)                                              |

## Features

- ♦ 10.8V to 30V Wide Supply Voltage Range
- ♦ Current-Controlled Output
- ♦ Up to 750mA LED Current at 12V Output
- ♦ Linear and PWM Dimming Control
- ♦ Over 80% Efficiency at Full Load
- ♦ Supply Undervoltage Lockout
- ♦ Output Overvoltage Protection

## Ordering Information

| PART           | TEMP RANGE     | IC PACKAGE   |
|----------------|----------------|--------------|
| MAX16802BEVKIT | -40°C to +85°C | 8 µMAX ®     |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                            |
|---------------------------|-------|--------------------------------------------------------|
| L1                        |     1 | 4.7µH, 4.2A peak SMD inductor Coilcraft DO3308P-472ML  |
| Q1                        |     1 | 60V, 3.2A n-channel MOSFET Vishay Si3458DV             |
| R1                        |     1 | 392k Ω ±1%, 1/8W resistor (0603)                       |
| R2                        |     1 | 11k Ω ±1%, 1/8W resistor (0603)                        |
| R3                        |     1 | 499k Ω ±1%, 1/8W resistor (0603)                       |
| R4                        |     1 | 73.2k Ω ±1%, 1/8W resistor (0603)                      |
| R5, R7                    |     2 | 1k Ω ±1%, 1/8W resistors (0603)                        |
| R6                        |     1 | 330 Ω ±1%, 1/4W resistor (1206)                        |
| R8                        |     1 | 220 Ω ±1%, 1/8W resistor (0603)                        |
| R9                        |     1 | 0.10 Ω ±1%, 1/2W resistor (1206) Susumu RL1632R-R100-F |
| R10                       |     1 | 1 Ω ±5%, 1/8W resistor (0603)                          |
| U1                        |     1 | MAX16802B (8-pin µMAX)                                 |
| VIN, VLED, PWM_IN, LIN_IN |     4 | 0.1in, 2-pin male connectors (through hole)            |
| -                         |     1 | MAX16802B PC board                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16802B Evaluation Kit

## Quick Start

The MAX16802B EV kit is fully assembled and tested. Follow these steps to verify operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a DC power supply (0 to 30V or above, 1A) to +VIN and GND.
- 2) Connect a voltmeter or oscilloscope and the LED array (connected in series to drop about 12V at 750mA forward current) to +VLED and -VLED with anode connected to +VLED and cathode to -VLED.
- 3) Close the jumpers J1 and J2 to disable dimming.
- 4) Turn on the power supply and increase the input voltage to above 10.8V. The output voltage increases to forward bias the LED array and delivers approximately 750mA regulated average LED current. Increase the supply further up to 30V and the output average current will be regulated throughout the range.
- 5) Open shunt J1 and apply a PWM signal to PWM\_IN with  a  frequency of 200Hz and 0 to 2V amplitude. Vary the duty cycle from 0 to 100% and the LED brightness varies from 100% to 0%. When the PWM duty cycle is 0%, the LED brightness is 100%.
- 6) Close J1, and then open J2. Connect a variable voltage source to LIN\_IN and vary the voltage between 0 and 1.6V. The LED brightness varies from 100% to 0%. When the voltage input at LIN\_IN is 0V, the LED brightness is 100%.

## Caution: Avoid powering up the EV kit without connecting load.

## Detailed Description

The MAX16802B evaluation kit is a current-controlled, high-output-current LED driver capable of supplying constant currents up to 750mA, irrespective of supply voltage variations.

This EV kit is  based on a discontinuous current mode (DCM) buck-boost converter operating at 262kHz to deliver a finite  amount of energy to the output every cycle. The amount of this energy depends primarily on the value of the inductor and the user-programmable peak inductor current and does not depend on the supply voltage. Due to this configuration, the power output of the EV kit, and thus the output current supplied to the LED at a given LED operating voltage, becomes independent of the supply voltage.

This EV kit is designed to drive LED loads capable of taking up to 750mA of maximum current at a 12V operating voltage. If an LED load with lower operating voltage is  used,  then  the  maximum output current will increase by the same ratio to maintain the output power constant. To drive an LED array with a different operating voltage, the value of the current-sense resistor needs to be adjusted. Calculation of the current-sense resistor for a different output operating voltage is explained in later sections.

## Input Supply UVLO

Input supply UVLO is implemented by using a resistor network that combines R3 and R4, which senses the input supply voltage and uses the EN pin to turn on the circuit  when the input supply voltage goes above 10.8V. The wake-up threshold of EN is 1.23V when the voltage at EN is rising, and it has a hysteresis of 50mV. Once the device is turned on, due to the hysteresis, the device turns off only if the input supply voltage goes below 10.4V.

The UVLO threshold can be adjusted by varying R1 or R2 using the equation below:

<!-- formula-not-decoded -->

where VUVLO is the desired UVLO threshold. To maintain threshold accuracy, keep the value of R4 less than 100k Ω .

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-3388 | www.centralsemi.com   |
| Coilcraft             | 847-639-6400 | 847-639-1469 | www.coilcraft.com     |
| Diodes Inc.           | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Susumu Co Ltd.        | 208-328-0307 | 208-328-0308 | www.susumu-usa.com    |
| TDK                   | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Vishay                | 402-563-6866 | 402-563-6296 | www.vishay.com        |

Note: Indicate you are using the MAX16802B when contacting these manufacturers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16802B Evaluation Kit

## Output Overvoltage Protection

The maximum voltage at the positive pin of VLED with respect to GND is limited to 45V by a feedback network formed by R1 and R2, which is connected to the FB pin of the MAX16802B. If the EV kit is turned on with no load or if the LED connection opens, the voltage at the positive pin of VLED may rise to unsafe levels. This condition is  sensed by the internal error amplifier, which reduces the peak inductor current to limit the voltage at the positive pin of VLED to 45V. Even if this protection is present, it is recommended to connect the specified load before powering up the EV kit.

## PWM Dimming

The PWM dimming is for controlling the LED brightness by adjusting the duty cycle of the PWM input signal connected to the PWM\_IN input. A HIGH at PWM\_IN input  turns  off  the  LED  current  and  LOW  turns  on  the LED current. Connect a signal with peak amplitude between 1.5V to 5.0V and with frequency between 100Hz to 1000Hz and vary the duty cycle to adjust the LED brightness. Frequencies lower than 100Hz can introduce flickering in the light output. LED brightness reduces when duty cycle is increased and vice-versa. When the PWM duty cycle is 0%, the LED brightness will be 100%.

## Linear Dimming

The linear dimming is for controlling the LED brightness by varying the amplitude of the voltage connected to the LIN\_IN input. The voltage at the LIN\_IN input modulates the current-sense signal and makes the MOSFET trip  at  a  different  current  level.  This  process,  in  turn, changes the output current and thus controls the LED brightness. Since the LED is continuously on at all brightness levels, flickering effect is not present with linear dimming. Vary the LIN\_IN voltage between 0 and 1.6V to adjust LED brightness from 100% to 0%. LED brightness reduces when the voltage at LIN\_IN is increased and vice-versa. When the voltage at LIN\_IN is 0V the LED brightness is 100%.

## Adjusting the Output Power

To change the maximum output power of the EV kit from 12V at 750mA to a different level, adjust the value of  the  current-sense resistor, R9, using the following equations. Note that the maximum output current of the EV kit is limited to 750mA, the maximum output voltage is limited to 15V, and the maximum output power is limited to 8.25W.

Initially  calculate  the  approximate  optimum ON duty cycle required at the minimum input voltage:

<!-- image -->

<!-- formula-not-decoded -->

where VINMIN is the minimum input supply voltage, VLED is the LED operating voltage, ILED is the desired LED current and VD is the forward voltage of D2.

Calculate the approximate required peak inductor current:

<!-- formula-not-decoded -->

where kf is a noncritical 'fudge factor' set equal to 1.1 for this circuit.

Calculate the approximate required inductor value and choose the closest standard value smaller than the calculated value:

<!-- formula-not-decoded -->

where L is the inductance value of inductor L1, and fSW is the switching frequency equal to 262kHz.

Power transferred to the output circuit by the flyback process is:

<!-- formula-not-decoded -->

Power consumed by the output circuit is:

<!-- formula-not-decoded -->

Conservation of power requires that the above two equations can be equated and solved for a more precise value of the required peak inductor current.

<!-- formula-not-decoded -->

Set the value of the current-sense resistor, R9, based on the IPEAK value using the following equation:

<!-- formula-not-decoded -->

where 0.292V is the current-sense trip threshold voltage. R7 and R8 form a voltage-divider, which scales down the voltage across the current-sense resistor before reaching the current-sense pin of the device.

## Jumper Selection

Keep jumper J1 closed when PWM dimming is not used. Keep jumper J2 closed when linear dimming is not used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16802B Evaluation Kit

Figure 1. MAX16802B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Boblet

## MAX16802B Evaluation Kit

<!-- image -->

Figure 2. MAX16802B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16802B EV Kit PC Board Layout-Component Side

Figure 4. MAX16802B EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5