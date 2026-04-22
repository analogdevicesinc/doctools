<!-- lastmod 2023-08-03 -->
## TMC6140 Datasheet

IC Version V1.0 | Document Revision V1.03 · 2021-Oct-15

TMC6140isafullyintegrateduniversal3-phaseMOSFETgatedriverforPMSMservoorBLDCmotors. External MOSFETs for up to 100 A motor current are supported. Three bottom shunt ampli/uniFB01ers allow easy current sensing and enhanced commutation of the motor. A switching regulator (3.3V, 0.5 A, internal Schottky diode for up to 100 mA) generates enough power for the IOs and an external microcontroller. Further on, it can serve as step-up converter to stabilize statically the gate voltages of the MOSFETs. A DIAG output for further diagnostics and two different power down modes are available. Features

<!-- image -->

## Applications

- Power Tools
- Industrial Drives
- Robotics
- Textile Machines
- Laboratory Automation
- 3-phase motors up to 100 A coil current (external MOSFETs)
- 3V3SwitchingRegulator (0.5 A) with internal Schottky diode (up to 100 mA)
- Voltage Range 5...30 V DC · Gate Drive 0.5 A or 1.0 A
- Charge pump pin to utilize buck converter for step-up converter
- Analogprogrammableshortdetect
- 3 Bottom Shunt Ampli/uniFB01ers
- 2 Low Power Modes with 0.25mA standby current consumption
- Pumps · Fans
- Diagnostics output via UART-TxD
- Battery Operated Devices

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2021 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com

<!-- image -->

<!-- image -->

- Factory Automation

## Contents

| 1   | Order Codes                    | Order Codes                                 | 3     |
|-----|--------------------------------|---------------------------------------------|-------|
| 2   | Principle of Operation         | Principle of Operation                      | 4     |
| 3   | Pinout                         | Pinout                                      | 7     |
| 4   | TMC6140 Pin Table              | TMC6140 Pin Table                           | 8     |
| 5   | Functional Description 5.1     | Functional Description 5.1                  | 10    |
|     |                                | MOSFETs and Slope Control . Bridge          | 10    |
|     | 5.2                            | Tuning the MOSFET . Low Power Modes . . . . | 11    |
|     | 5.3                            | . . Diagnostics . . . .                     | 14    |
|     | 5.4 5.5                        | . . . . 3V3                                 | 15    |
|     | 5.6                            | . . . Switching Regulator . . .             | 17 18 |
|     |                                | Shunt Resistor Ampli/uniFB01ers . .         |       |
| 6   | Electrical Characteristics 6.1 | Electrical Characteristics 6.1              | 19 19 |
|     | 6.2                            | Absolute Maximum Ratings . Range . . . . .  |       |
|     |                                | Operational DC and Timing                   | 20 20 |
|     | 6.3                            | . characteristics                           |       |
| 7   | Package Mechanical Data        | Package Mechanical Data                     | 25    |
| 8   | Figures Index                  | Figures Index                               | 27    |
| 9   | Tables Index                   | Tables Index                                | 28    |
| 10  | Revision History .             | Revision History .                          | 29    |
|     | 10.1 IC Revision 10.2 Document | . . . . . .                                 | 29 29 |
|     | . . . . Revision               | . . . . . .                                 |       |

<!-- image -->

## 1 Order Codes

Order Code

| TMC6140-LA      | 00-0203   | Full functionality, 3 Shunt Ampli/uniFB01er, QFN , 36 pins, 0.5 mmpitch, Tray   | 5 x 6   |
|-----------------|-----------|---------------------------------------------------------------------------------|---------|
| TMC6140-LA-T    | 00-0203T  | Full functionality, 3 Shunt Ampli/uniFB01er, QFN , 36 pins, 0.5 mmpitch, Tape   | 5 x 6   |
| TMC6140-EVAL    | 40-0208   | Evaluation board for TMC6140                                                    | 80 x 85 |
| LANDUNGSBRUECKE | 40-0167   | Baseboard for TMC6140-EVAL and further boards.                                  | 55 x 85 |
| ESELSBRUECKE    | 40-0098   | Connector board for plug-in evalua- tion board system.                          | 38 x 61 |

Description

Table 1: Order codes

PN

Size [mm] x [mm]

<!-- image -->

## 2 Principle of Operation

TMC6140 is a MOSFET gate driver for three phase PMSM and BLDC motors. Ideally suited for applications in the range of 5 V to 24 V, it supports motor power ratings from 1 Watt to 1 kW.

## Single Supply Operation

TMC6140is designed to work with a single external power supply rail. All required supply voltages are generated internally based on the motor supply. TMC6140 generates a /uniFB01xed 3.3 V rail voltage with a switching regulator (buck converter). Allocating up to 0.5 A, TMC6140 is capable to supply internal and external logic supply (e.g. microcontroller). An internal Schottky diode is also available. This diode is operational up to 100mA load. In case more current has to be served, an external diode has to be mounted in parallel.

## Basic application setup

For a supply of VS up to 30 V, the following sample circuit depicts the required external components. This standard application circuit uses a minimum set of additional components. Six MOSFETs are selected for the desired current, voltage and package type. Three sense resistors are matched to the maximum motor coil current, and to the desired internal current ampli/uniFB01er output swing and ampli/uniFB01cation setting. Use low ESR capacitors for /uniFB01ltering the power supply. A minimum capacity of 100 µ F per ampere of coil current near to the power bridge is recommended for keeping power supply ripple low. The capacitors need to cope with the current ripple caused by chopper operation. Current ripple in the supply capacitors also depends on the power supply internal resistance and cable length.

Figure 1: Standard application

<!-- image -->

Due to the required charge of the bootstrap capacitors by switching low sides, full 100 % high side activity is not possible. To increase this duty cycle limit, insert external Schottky diodes between pin V10 pin and the bootstrap pins CU, CV and CW.

<!-- image -->

## Step-up converter

For low voltage application (VS ≤ 15V) the switching regulator output can be used to stabilize the power supply VCP to maintain 10 V output signals on HSx and LSx. Therefore, two additional Schottky diodes and a capacitor have to be provided. The voltage at VCP, which is the supply for the V10 regulator, will be almost doubled with this external circuit. Please be aware to not use this circuitry in case VS exceed this limit of 15 V to meet the maximum voltage limit for VCP.

Figure 2: Optional step-up converter for VCP, * minimal load at VCC\_IO is required, ** optional resistor to limit switching regulator load peak current (e.g. 10 Ohm)

<!-- image -->

VCC\_IO can be used as 3.3 V supply for external circuitry. To ensure the steady load of the capacitor a minimum load current at VCC\_IO is required in case the step circuit as shown in Figure 2 is utilized. The following equations /uniFB01t theoretically for a su/uniFB03cient load at VCC\_IO:

<!-- formula-not-decoded -->

The charge pump current is then modi/uniFB01ed by the ratio of the VCC\_IO supply voltage V V CCIO that is equal to 3.3 V and the minimum VS supply voltage V V S min , which must be higher than or equal to 5 V, to provide the required load current I LOAD .

Q G is the gate charge of the MOSFET, f PWM the PWM frequency and No MOSFET the number of MOSFETs that are switched during one PWM period.

To be on the safe side, is it better to increase the theoretical value by 20 ...50 %, e.g. to compensate a low quality inductor.

In case the external circuitry do not reach the required load current, an additonal load must be connected at VCC\_IO, e.g. by using a resitor and / or a LED. This load can be switched off during standby because it is only required during regular operation.

<!-- image -->

## Diagnostics and protection features

Diagnostic information is transmitted via an UART-TxD byte that can also been taken as INTR output. Internal break-before-make operation to protect against concurrent switching of high and low side is provided for the ease-of-use in combination with microcontrollers for PWM generation.

## Bottom Shunt Resistor Ampli/uniFB01ers

Bottom shunt ampli/uniFB01ers for all three motor phases are available and con/uniFB01gurable for different sensitivity.

<!-- image -->

## 3 Pinout

<!-- image -->

Figure 3: TMC6140-LA pinning QFN, 36 pins, 5 mm x 6 mm, Top view

<!-- image -->

## 4 TMC6140 Pin Table

| Pin Name   |   QFN | Type   | Description                                                                                                                                                                                                                                  |
|------------|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VS         |    11 |        | Motor supply voltage. Supply of internal regulators. Provide /uniFB01ltering capacity near pin with short loop to GND plane. Must be tied to the positive bridge supply voltage. Severe ringing must be avoided.                             |
| VDD5       |    12 |        | Output of internal 5Vregulator. Attach100nFcapacitortoGNDnear to pin for best performance. In case VS is /uniFB01xed at 5V, connect VDD5 to VS.                                                                                              |
| V10        |    33 |        | Output of internal 10V gate voltage regulator and supply pin of low side gate drivers. Attach 4.7 µ F ceramic capacitor to GNDplane near to pin for best performance. Use at least 5...10 times more capacity than for bootstrap capacitors. |
| VCP        |    32 |        | Supply of internal 10V gate voltage regulator. Connect with VS sup- ply or attach 100nF capacitor for step-up option.                                                                                                                        |
| SW         |    10 |        | Output of internal 3.3V switching regulator. Connect 15...68 µ H inductor to VCC_IO pin.                                                                                                                                                     |
| VCC_IO     |    21 |        | Rail voltage input for digital signals. Connect 22...47 µ F capacitance in case internal switching regulator is used.                                                                                                                        |
| CU         |     9 |        | Bootstrap capacitor positive connection. Tie to U terminal using 470nF...1 µ F, 16V or 25V ceramic capacitor.                                                                                                                                |
| HSU        |     8 |        | High side gate driver output.                                                                                                                                                                                                                |
| U          |     7 |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                               |
| LSU        |     6 |        | Low side gate driver output.                                                                                                                                                                                                                 |
| CV         |     2 |        | Bootstrap capacitor positive connection. Tie to V terminal using 470nF...1 µ F, 16V or 25V ceramic capacitor.                                                                                                                                |
| HSV        |     3 |        | High side gate driver output.                                                                                                                                                                                                                |
| V          |     4 |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                               |
| LSV        |     5 |        | Low side gate driver output.                                                                                                                                                                                                                 |
| CW         |    34 |        | Bootstrap capacitor positive connection. Tie to W terminal using 470nF... 1 µ F, 16V or 25V ceramic capacitor.                                                                                                                               |
| HSW        |    35 |        | High side gate driver output.                                                                                                                                                                                                                |
| W          |    36 |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                               |
| LSW        |     1 |        | Low side gate driver output.                                                                                                                                                                                                                 |
| ENABLE     |    31 | DI     | Positive active enable input. The driver stage will be switched off (all motoroutputs /uniFB02oating) whenthis pin is at low level. Enables Standby after about 420ms. Cycle low to clear DIAG (>5ms).                                       |

<!-- image -->

| Pin Name    | QFN   | Type   | Description                                                                                                                                                                                                                      |
|-------------|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DIAG        | 20    | DO     | Diagnosis output. High in case no error is detected. Can be used as UART-TxD or simple INTR. Short-to-x events are cleared by cycling ENABLE.                                                                                    |
| SH_SET      | 19    | AI     | Analog input voltage to de/uniFB01ne short protection threshold. Set to 0 results in switched off high side gate driver outputs.                                                                                                 |
| DRV_STRONG  | 29    | DI     | Digital driver strength input selection pin. DRV_STRONG=0:0.5A, =1:1.0A.                                                                                                                                                         |
| UL          | 14    | DI     | Low side control input for U.                                                                                                                                                                                                    |
| UH          | 13    | DI     | High side control input for U.                                                                                                                                                                                                   |
| VL          | 16    | DI     | Low side control input for V.                                                                                                                                                                                                    |
| VH          | 15    | DI     | High side control input for V.                                                                                                                                                                                                   |
| WL          | 18    | DI     | Low side control input for W.                                                                                                                                                                                                    |
| WH          | 17    | DI     | High side control input for W.                                                                                                                                                                                                   |
| LOWGAIN     | 30    | DI     | Digital driver gain selection pin for shunt ampli/uniFB01ers. LOWGAIN=0:gain=50, =1:gain=20.                                                                                                                                     |
| SI1         | 26    | AI     | 1st analog shunt ampli/uniFB01er input. Do not exceed input limits of 3 V / (2 · gain ) .                                                                                                                                        |
| SI2         | 27    | AI     | 2nd analog shunt ampli/uniFB01er input. Do not exceed input limits of 3 V / (2 · gain ) .                                                                                                                                        |
| SI3         | 28    | AI     | 3rd analog shunt ampli/uniFB01er input. Do not exceed input limits of 3 V / (2 · gain ) .                                                                                                                                        |
| nSI         | 24    | AI     | Shared negative shunt ampli/uniFB01er input. Connect to GND terminal of shunt resistor.                                                                                                                                          |
| SO1         | 22    | AO     | 1st analog shunt ampli/uniFB01er output, bias=V( VCC _ IO ) / 2: V ( SO 1) = V VCC _ IO / 2+ gain · ( V ( SI 1) - V ( nSI )) .                                                                                                   |
| SO2         | 23    | AO     | 2nd analog shunt ampli/uniFB01er output, bias=V( VCC _ IO ) / 2: V ( SO 2) = V VCC _ IO / 2+ gain · ( V ( SI 2) - V ( nSI )) .                                                                                                   |
| SO3         | 25    | AO     | 3rd analog shunt ampli/uniFB01er output, bias=V( VCC _ IO ) / 2: V ( SO 3) = V VCC _ IO / 2+ gain · ( V ( SI 3) - V ( nSI )) .                                                                                                   |
| Exposed die | -     |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for the low side gate drivers and for digital logic. Ensure low loop induc- tivity to bridge GND. |

Table 2: Functional Pin Description

<!-- image -->

## 5 Functional Description

TMC6140 is a fully integrated universal 3-phase MOSFET gate driver. External MOSFETs for up to 100 A motor current are supported. Con/uniFB01guration possibilites and tuning options for the MOSFET bridge are presented in this chapter. The diagnostics output and standby capabilites of TMC6140 are described in the following. Finally, the buck converter and bottom shunt settings are presented.

## 5.1 MOSFETs and Slope Control

The gate-drive current and MOSFET gate resistors R G (optional) should basically be adapted to the MOSFET gate-drain charge (Miller charge) in order to yield reasonable slope times. The following /uniFB01gure shows the in/uniFB02uence of the Miller charge on the switching event.

The selection of power MOSFETs depends on a number of factors, like package size, on-resistance, voltage rating and supplier. It is not true, that larger, lower RDSon MOSFETs will always be better, as a larger device also has higher capacitances and may add more ringing in trace inductance and power dissipation in the gate drive circuitry. Adapt the MOSFETs to the required motor voltage (adding 5...10 V of reserve to the peak supply voltage) and to the desired maximum current, in a way that resistive power dissipation still is low for the selected MOSFET package. Choose modern MOSFETs with fast and soft recovery bulk diode and low reverse recovery charge. A small, SMD MOSFET package allows compacter routing and reduces parasitic inductance effects. TMC6140 drives the MOSFET gates with 10 V, so normal, 10 V speci/uniFB01ed types are su/uniFB03cient. Logic level FETs (4.5 V speci/uniFB01ed RDSon) will also work but may be more critical with regard to bridge cross-conduction due to lower V GS \_ th .

aeo anos o uieg - s

Figure 4: Miller charge determines switching slope

<!-- image -->

The following table shall serve as a thumb rule for programming the MOSFET driver current (DRV\_STRONG setting) and the selection of gate resistors:

| Typ. Miller Charge [nC]   | DRV_STRONG   | Value of R G [Ohm]   |
|---------------------------|--------------|----------------------|
| <10                       | 0            | ≤ 10 (recomended)    |
| 10...20                   | 0 or 1       | ≤ 5 (optional)       |
| 20...80                   | 1            | ≤ 2.5 (optional)     |

Table 3: Functional Pin Description

<!-- image -->

## Note

Use the lowest gate driver strength setting DRV\_STRONG=0 giving favorable switching slopes, before increasing the value of the gate series resistors. A slope time of nominal 40 ns to 80 ns is absolutely su/uniFB03cient and will normally be covered by a Break-Before-Make (BBM) time up to 160 ns. This BBM has to be generated by the microcontroller adapting the PWM signal accordingly. TMC6140 provides a small BBM of almost 1 ns, just to ensure that only one MOSFET of a phase is switched on. In case slower slopes have to be used, e.g. with large MOSFETs, ensure that the BBM time su/uniFB03ciently covers the switching event, in order to avoid bridge cross conduction. The shortest BBM time, safely covering the switching event, gives best results. Add roughly 30% of reserve, to cover production stray of MOSFETs and driver.

## 5.2 Tuning the MOSFET Bridge

Stray inductance in power routing will cause ringing whenever the opposite MOSFET is in diode conduction prior to switching on a low-side or high-side MOSFET. Diode conduction occurs during break-before-make time whenever the load current is inverse to the following bridge polarity. The MOSFET bulk diode has a certain, type speci/uniFB01c reverse recovery time and charge. This time typically is in the range of a few 10 ns. During reverse recovery time, the bulk diode will cause high current /uniFB02ow across the bridge. This current is taken from the power supply /uniFB01lter capacitors (see thick lines in the next /uniFB01gure). Once the diode opens, parasitic inductance tries to keep the current /uniFB02owing.

A clean switching event is favorable to ensure low power dissipation and good EMC behavior. Unsuitable layout or components endanger stable operation of the circuit. Therefore, it is important to understand the effect of parasitic trace inductivity and MOSFET reverse recovery.

<!-- image -->

Decide use and value of the additional components based on measurements of the actual circuit using the final layout!

Figure 5: Bridge protection options for power routing indcutivity

<!-- image -->

A high, fast slope results and leads to ringing in all parasitic inductivities (see next /uniFB01gures). This may lead to bridge voltage undershooting the GND level as well as fast pulses on VS and all MOSFET connections. It must be ensured, that the driver IC does not see spikes on its BM pins to GND going below -5 V. Severe VS ripple might overload the charge-pump circuitry. Measure the voltage directly at the driver pins to driver GND. The amount of undershooting depends on energy stored in parasitic inductivities from low side drain to low side source and via the sense resistor R S to GND. The following /uniFB01gure depicts a scope shot of a switching high side MOSFET whose switching quality is good and signals are clean.

Figure 6: Ringing of output (green) and gate voltages (yellow, blue) with DRV\_STRONG=0

<!-- image -->

When using relatively small MOSFETs, a soft slope control requires a high gate series resistance. This endangers safe MOSFET switch off. Add additional diodes to ensure safe MOSFET off conditions with slow switch-on slopes (see next /uniFB01gure).

<!-- image -->

Figure 7: Diodes for safe off condition with high gate series resistance

<!-- image -->

## Ensure Reliable Operation

- Provide su/uniFB03cient power /uniFB01ltering capacity close to the bridge and close to VS pin
- Use SMD MOSFETs and short interconnections
- Tune MOSFET switching slopes (measure switch-on event at MOSFET gate) to be slower than the MOSFET bulk diode reverse recovery time. This will reduce cross conduction.
- Some MOSFETs eliminate reverse recovery charge by integrating a fast diode from source to drain.
- Add optional gate resistors close to MOSFET gate and output capacitors to ensure clean switching and reliable operation by minimizing ringing.

## Bridge Layout Considerations

- Keep MOSFET gate connections short and straight and avoid loop inductivity between bridge feedback (U,V,W) and corresponding HS driver pin. Loop inductance is minimized with parallel traces, or adjacent traces on adjacent layers. A wider trace reduces inductivity (do not use minimum trace width).
- Tune the bridge layout for minimum loop inductivity. A compact layout is best.
- Place the TMC6140 near the low side MOSFETs GND connections, with its GND connections directly connected to the same GND plane.
- Check in/uniFB02uence of optional components.
- Optimize switching behavior by using lowest acceptable gate current setting.
- Measure the performance of the bridge by probing BM pins directly at the bridge or at the TMC6140 using a short GND tip on the scope probe rather than a GND cable, if available.

<!-- image -->

## 5.3 Low Power Modes

TMC6140 provides two standby modes that lower signi/uniFB01cantly the overall power consumption. Switching ENABLE input signal to 0 will switch off the drive stage immediately. Furhermore, any generated short circuit event (see next section) will be cleared. After around typically 425 ms from the event when ENABLE switches from high to low, the internal standby mode is enabled. Dependent on the digital high and low sides input control pins (UL, UH, VL, VH, WL, WH) the 3V3 switching regulator is also turned off or remains powered. The next /uniFB01gure depicts this exemplarily. In this example only the low side of phase U is considered (with impact on LSU output). All other input control pins (UH, VL, VH, WL, WH) are de/uniFB01ned to be equal to 0. Thus all gate driver outputs except LSU are switched off. Supposed that during UL equals 1 (LSU is active) a short to ground is detected, the LSU gate output is immediately turned off and DIAG switches to low to indicate the error (further details on DIAG will be explained in the next section). Switching ENABLE from high to low will clear this event, but as long as ENABLE is low, the driver stage is turned off. After around typically 425 ms, the internal standby will be activated if ENABLE remains at low level. In case any of the digital input pins (UL, UH, VL, VH, WL, WH) is set to high at this point in time (standby is activated), the 3V3 regulator will not be switched off (Low Power Mode 1: buck\_en = 1). In this example, the short-to-ground cause remain and after enabling the power stage (ENABLE = 1) and switching on the low side again, the next S2G event will be triggered. To save more power, it is possible to also turn off the 3V3 switching regulator. To obtain this Low Power Mode 0, all of the digital input pins (UL, UH, VL, VH, WL, WH) have to be low when standby is activated. This is depicted at the right side of the /uniFB01gure where UL is low when standby is activated.

Note

Beware, Low Power Mode 0 will result in a shut down of the logic in case the 3V3 switching regualtor is the supply of the microcontroller.

<!-- image -->

Figure 8: Illustration of the activation of the two available Low Power Modes

<!-- image -->

## 5.4 Diagnostics

As brie/uniFB02y described in the section before, TMC6140 provides error diagnostics capabilites and a digital DIAG output to indicate recognized error states. In case any error state is identi/uniFB01ed, a single wire UART datagram of 64 bits is sent out repeatedly. This UART datagram consists of a sync byte (with start and stop bit), a data byte (with start and stop bit) and 44 stop bits. After the start bit (low level) of the sync byte six bits with high level will be sent. The seventh bit is a zero, followed by the stop bit (high level). The data byte again starts with a start bit (low level), then eight data bits are transmitted followed by 45 stop bits. Then, UART transmission starts again. In the following the UART datagram is depicted.

Figure 9: Schematic of the DIAG output in case an error state is identi/uniFB01ed.

<!-- image -->

The internal UART clock frequency is typically 9.6 kHz. This allows all kind of microcontrollers to synchronize with the bit stream. By detecting the two /uniFB01rst high-to-low switches of DIAG, shifting the determined time between both switches by 3 will reveal the time for one bit. After detecting the third switch from high-to-low the second START bit and the eigth data bits will follow. In case it is only required to know error states of TMC6140 and not the error condition speci/uniFB01cally, a low level signal of DIAG can be taken as error message.

## Error /uniFB02ags

- OT: Overtemperature warning

In summary, TMC6140 transmits ten error condition bits within eight data bits. The data bits 0...2 transmit four status /uniFB02ags. That means, switching ENABLE to low for a short time (&gt; 5 ms) will not reset these error /uniFB02ags because these failure states are permanently checked and have to be dissolved externally. It is also noted, that detecting these error /uniFB02ags will not generate an automatic switch-off of the driver stage. Following status /uniFB02ags are available:

- The chip temperature has reached 150°C. The driver should be switched off immediately because the temperature is out of operational range.
- The chip temperature has reached 120 °C. Further operation could harm the chip.
- OTPW: Overtemperature prewarning
- UVVS: VS voltage is below 6.8 V This may result in gate driver outputs (at LSx, HSx) which are too low for a proper operation of the connected MOSFETs.

The /uniFB01rst three error /uniFB02ags are coded in the /uniFB01rst two data bits OTUV1 and OTUV0 with de/uniFB01ned hierarchy (OT is prior to UVVS, UVVS is prior to OTPW):

- SC: Load at the 3V3 switching regulator consumes too much current. The output is automatically switched off in every buck converter clock cycle in case overcurrent is detected.
- OTUV[1:0]=11 indicates OT=1, UVVS=x, OTPW=1
- OTUV[1:0]=01 indicates OT=0, UVVS=0, OTPW=1
- OTUV[1:0]=10 indicates OT=0, UVVS=1, OTPW=x
- OTUV[1:0]=00 indicates OT=0, UVVS=0, OTPW=0

<!-- image -->

## Error events

- S2G: Short-to-ground on one or more phases: All three driver stage high side outputs (HSU, HSV, HSW) will be switched off.

The data bits 3...4 transmit two status events that will result in switched off driver stage outputs:

- S2VS: Short-to-VS (supply) on one or more phases: All six driver stage outputs (HSU, HSV, HSW, LSU, LSV, LSW) will be switched off.
- Bit5: Short-to-x has been detected at phase U.

The remaining status events (data bits 5...7) serve as information source on which phase the short-to-x event has been identi/uniFB01ed. The sequence is:

- Bit6: Short-to-x has been detected at phase V.

These Short-to-x events have to be cleared by ENABLE = 0 for at least 5 ms to release the particular driver stage outputs.

- Bit7: Short-to-x has been detected at phase W.

## Short-to-x Con/uniFB01guration

Additonally, SH\_SET is dedicated for a second feature. In case SH\_SET is set to 0 V (&lt; 0.4 V), the high side outputs are masked, only the low side outputs can be driven during this state. This state suits well for the beginning of the operation as it can be used to load the bootstrap capacitors without switching off the high side PWM signals. In case SH\_SET is lower than 0.4 V, the internal tolerable voltage drop for the Short-to-VS detetion is set to 1.0 V. Values at SH\_SET between 0.4 V and 0.9 V are prohibited.

By applying an analog signal to SH\_SET the Short-to-VS resp. Short-to-GND detector level is de/uniFB01ned. Shortto-VS checks for the voltage drop between low side MOSFET and bottom shunt resistor, whereas Shortto-GND checks for the voltage drop on high side MOSFET. If these voltage drops exceed SH\_SET/2 [V] an error will occur.

Figure 10: Impact of SH\_SET con/uniFB01guration. SH\_SET &lt; 0.4 V: High side gate signals are low, internal S2VS limit = 1.0 V above 0.9 V: internal S2x limit = SH\_SET/2 [V] 0.4 V &lt; SH\_SET &lt; 0.9 V is prohibited.

<!-- image -->

t

<!-- image -->

## 5.5 3V3 Switching Regulator

This regulator comes with an integrated 100 mA 30 V Schottky diode which minimizes part count. If more current is required, use an external Schottky diode in parallel. The integrated linear 5V regulator starts up the switch regulator with a start delay of 1 ms at maximum.

TMC6140 integrates a buck switching regulator designed for up to 500 mA of output current and a 3.3 V output voltage. Its main purpose is to supply the TMC6140 and a connected microcontroller.

The following /uniFB01gure shows the basic internal circuit and required external circuitry.

Figure 11: Internal schematic of and external components for the 3V3 switching regulator

<!-- image -->

## Component Selection

The following table depcits exemplary values when using the chopper frequency of 680 kHz. The capacitor can either be a ceramic type, or an electrolytic low-ESR capacitor in parallel to a 1 µ F or larger ceramic capacitor. Generally increasing the inductivity reduces current ripple, and thus allows for a higher output current without triggering the overcurrent detector.

TMC6140 switching regulator provides stable regulation in a wide range of input and output voltages as well as for a wide range of external L/C components. This allows for using standardized capacitance and inductivity values, unless an optimization is desired, e.g. for space critical applications, where the size of external components has to be minimized.

|   Input Voltage [V] |   L SW [ µ H] |   Value of C SW [ µ F] |
|---------------------|---------------|------------------------|
|                   5 |            15 |                     22 |
|                  12 |            33 |                     47 |
|                  24 |            68 |                     47 |
|                  30 |            68 |                     47 |

Table 4: 3V3 switching regulator component examples

<!-- image -->

## 5.6 Shunt Resistor Ampli/uniFB01ers

TMC6140 provides for each motor phase a bottom shunt ampli/uniFB01er with a bias of V V CC \_ IO / 2 [V]. LOWGAIN adapts the internal gain factor to 20 (LOWGAIN = 1) or 50 (LOWGAIN = 0). Thus, the maximum input limit at SIx analog input must not exceed 3 V / (2 · gain ) . The resulting analog voltage at SOx yields to V SOx = V V CC \_ IO / 2 + gain · ( V SIx -V nSI ) with x is U,V, or W. All three ampli/uniFB01ers share the same negative input pin nSI.

<!-- image -->

Figure 12: Shunt Ampli/uniFB01er setup for phase W

<!-- image -->

## 6 Electrical Characteristics

## 6.1 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more than one maximum rating at a time for an extended period must be avoided by application design.

| Parameter                                              | Symbol     | Min           | Max               | Unit   |
|--------------------------------------------------------|------------|---------------|-------------------|--------|
| Supply voltage operating with inductive load           | V V S      | -0.5          | 33                | V      |
| Supply and bridge voltage short time peak              | V VSMAX    |               | 33                | V      |
| Supply voltage for V10 regulator                       | V VCP      | V V S - 0 . 5 | 33                | V      |
| Peak voltages on U/V/W pins (due to stray inductivity) | V X        | -5            | V V S +6          | V      |
| Peak voltage on Cxx bootstrap pins                     | V Cx       |               | 45                | V      |
| Peak voltage on Cxx bootstrap pins relative to BM      | V Cx       |               | V V x +16         | V      |
| Supply voltage VDD5                                    | V VDD 5    | -0.5          | 5.5               | V      |
| IO supply voltage                                      | V VCC _ IO | -0.5          | 3.6               | V      |
| Logic and analog input voltage                         | V I        | -0.5          | V VCC _ IO +0 . 5 | V      |
| Maximum current to/from digital pins (short time peak) | I IO       |               | +/- 500           | mA     |
| 5V regulator output current                            | I VDD 5    |               | 60                | mA     |
| 5V regulator continious power dissipation              | P VDD 5    |               | 0.5               | W      |
| 10V regulator output current                           | I V 10     |               | 60                | mA     |
| 10V regulator continious power dissipation             | P V 10     |               | 0.5               | W      |
| Junction temperature                                   | T J        | -50           | 150               | °C     |
| Storage temperature                                    | T STG      | -55           | 150               | °C     |
| ESD protection (HBM / CDM)                             | V ESD      |               | 1500 / 500        | V      |

Table 5: Absolute Maximum Ratings

<!-- image -->

## 6.2 Operational Range

Table 6: Operational Range

| Parameter                                   | Symbol     | Min   |   Max | Unit   |
|---------------------------------------------|------------|-------|-------|--------|
| Junction temperature                        | T J        | -40   | 125   | °C     |
| Supply voltage for motor and bridge         | V V S      | 5     |  30   | V      |
| Supply voltage for V10 regulator            | V VCP      | V V S |  30   | V      |
| IO supply voltage                           | V VCC _ IO | 3.0   |   3.6 | V      |
| Supply voltage VDD5 (internally generated)  | V VDD 5    | 4.5   |   5.5 | V      |
| 10V regulator output (internally generated) | V V 10     | 9.5   |  10.5 | V      |

## 6.3 DC and Timing characteristics

| Parameter                                                 | Symbol   | Condition    | Min   | Typ   |   Max | Unit   |
|-----------------------------------------------------------|----------|--------------|-------|-------|-------|--------|
| Total supply current, no Low Power mode, no active driver | I V S    | V V S = 24 V |       | 4     |  6    | mA     |
| Total supply current, Low Power mode 1 , no active driver | I V S    | V V S = 24 V |       | 1     |  1.25 | mA     |
| Total supply current, Low Power mode 0 , no active driver | I V S    | V V S = 24 V |       | 0.2   |  0.25 | mA     |
| Internal current consumption from VDD5                    | I V S    | V V S = 24 V |       |       |  4    | mA     |

Table 7: Power Supply Current DC characteristics

<!-- image -->

| Parameter                                                   | Symbol            | Condition                 | Min   | Typ      | Max   | Unit   |
|-------------------------------------------------------------|-------------------|---------------------------|-------|----------|-------|--------|
| RDSON low side                                              | R ONL             | Gate off, DRV_STRONG=1    |       | 1.8      | 2.0   | Ohm    |
| RDSON high side                                             | R ONH             | Gate off, DRV_STRONG=1    |       | 1.2      | 2.0   | Ohm    |
| Gate Drive current low side, MOSFET turning on at 3V V GS   | I LON 0 I LON 1   | DRV_STRONG=0 DRV_STRONG=1 |       | 450 850  |       | mA mA  |
| Gate Drive current high side, MOSFET turning on at 3V V GS  | I HON 0 I HON 1   | DRV_STRONG=0 DRV_STRONG=1 |       | 450 850  |       | mA mA  |
| Gate Drive current low side, MOSFET turning off at 3V V GS  | I LOFF 0 I LOFF 1 | DRV_STRONG=0 DRV_STRONG=1 |       | 650 1250 |       | mA mA  |
| Gate Drive current high side, MOSFET turning off at 3V V GS | I HOFF 0 I HOFF 1 | DRV_STRONG=0 DRV_STRONG=1 |       | 700 1250 |       | mA mA  |

Table 8: Motor Driver Timing and DC characteristics

| Parameter                                                                                | Symbol                  | Condition                 | Min   | Typ    | Max   | Unit   |
|------------------------------------------------------------------------------------------|-------------------------|---------------------------|-------|--------|-------|--------|
| Low side on reaction delay time                                                          | t DLYLON 0 t DLYLON 1   | DRV_STRONG=0 DRV_STRONG=1 |       | 120 90 |       | ns ns  |
| Low side off reaction delay time                                                         | t DLYLOFF 0 t DLYLOFF 1 | DRV_STRONG=0 DRV_STRONG=1 |       | 90 90  |       | ns ns  |
| High side on reaction delay time                                                         | t DLYLON 0 t DLYLON 1   | DRV_STRONG=0 DRV_STRONG=1 |       | 150 90 |       | ns ns  |
| High side off reaction delay time                                                        | t DLYLOFF 0 t DLYLOFF 1 | DRV_STRONG=0 DRV_STRONG=1 |       | 120 90 |       | ns ns  |
| Matching difference delay time High side off to low side on Low side off to high side on | t DLYM                  |                           |       |        | 15    | ns     |
| Switch off time of LSx/HSx output af- ter disabling ENABLE                               | t DIS                   |                           |       |        | 400   | ns     |

Table 9: Reaction delay times from input signal change to start gate driver output change

<!-- image -->

| Parameter                                                         | Symbol        | Condition         | Min   |    Typ | Max   | Unit   |
|-------------------------------------------------------------------|---------------|-------------------|-------|--------|-------|--------|
| Short-to-VS voltage limit                                         | V V S 2 V S   | SH_SET=2.5 V      | 1.0   |   1.25 | 1.5   | V      |
| during brake mode                                                 | V V S 2 V S B | SH_SET=0 V        | 0.75  |   1    | 1.25  | V      |
| Short-to-GND voltage limit                                        | t V S 2 G     | SH_SET=2.5 V      | 1.0   |   1.25 | 1.5   | V      |
| Short-to-VS delay                                                 | t TS 2 V S    | SH_SET=0          | 1.3   |   1.8  | 2.5   | µ s    |
| Short-to-GND delay                                                | t TS 2 G      | SH_SET=0          | 1.8   |   2.2  | 2.7   | µ s    |
| Undervoltage VS threshold for DIAG error output (UVVS /uniFB02ag) | V UVVS        | V V S falling     | 6.7   |   6.9  |       | V      |
| V VDD 5 threshold for internal reset                              | V UV 5        | V VDD 5 rising    |       |   3.7  | 4.0   | V      |
| V VCC _ IO threshold for internal reset                           | V VCC _ IO    | V VCC _ IO rising |       |   1.9  | 2.5   | V      |
| Overtemperature prewarning                                        | T OTPW        | Temp rising       | 105   | 120    | 135   | °C     |
| Overtemperature warning                                           | T OT          | Temp rising       | 135   | 150    | 165   | °C     |

Table 10: Detection DC characteristics

| Parameter                                                 | Symbol   | Condition        | Min   | Typ   | Max    | Unit   |
|-----------------------------------------------------------|----------|------------------|-------|-------|--------|--------|
| UART-Frequency of DIAG output                             | f UART   | Any error        | 6.5   | 9.6   | 14.5   | kHz    |
| Deviation of DIAG output frequency over temperature       | f DEVUT  | T J = full range |       |       | +/-300 | Hz     |
| StartdelayofLowPowerMode0/1af- ter falling edge of ENABLE | t STDBY  |                  | 290   | 470   | 590    | ms     |
| Delay to clear Short-to-x event (ENABLE=0)                | t CLR    |                  | 5     |       |        | ms     |

Table 11: DIAG and Low Power Mode Timing

<!-- image -->

| Parameter                                  | Symbol   | Condition        | Min   | Typ    | Max    | Unit   |
|--------------------------------------------|----------|------------------|-------|--------|--------|--------|
| Input offset                               | V INOFF  | T J = 25°C       | 0.15  | 0.2    | 0.25   | mV     |
| Deviation of input offset over temperature | V DEVST  | T J = full range |       | +/-0.1 | +/-0.2 | mV     |
| Input resistor                             | V INRES  | T J = 25°C       | 48    | 60     | 72     | kOhm   |
| Output resistor                            | V INRES  | T J = 25°C       | 240   | 300    | 360    | Ohm    |
| Low Gain (LOWGAIN=1)                       | G LOW    | T J = 25°C       | 19.0  | 19.8   | 20.0   |        |
| Deviation of low gain over temperature     | V DEVGL  | T J = full range |       | +/-0.1 | +/-0.2 |        |
| High Gain (LOWGAIN=0)                      | G HIGH   | T J = 25°C       | 49    | 49.5   |        |        |
| Deviation of high gain over temperature    | V DEVGH  | T J = full range |       | +/-0.5 | +/-1.0 |        |

Table 12: Shunt Resistor Ampli/uniFB01er DC characteristics

<!-- image -->

| Parameter                                                   | Symbol      | Condition            | Min   | Typ   | Max   | Unit   |
|-------------------------------------------------------------|-------------|----------------------|-------|-------|-------|--------|
| 5V regulator output voltage                                 | V VDD 5     | T J = 25°C           | 4.75  | 5.0   | 5.25  | V      |
| Deviation of 5V regulator output over temperature           | V DEV 5 T   | T J = full range     |       | +/-5  | +/-50 | mV     |
| Deviation of 5V regulator output over supply voltage        | V DEV 5 S   | V V S = full range   |       |       | +/-20 | mV     |
| 10V regulator output voltage                                | V V 10      | T J = 25 °C          | 9.5   | 10.0  | 10.5  | V      |
| Deviation of 10V regulator output over temperature          | V DEV 10 T  | V V S = full range   |       | +/-10 | +/-50 | mV     |
| Deviation of 10V regulator output over supply voltage       | V DEV 10 S  | V V S = 10 V ...33 V |       |       | +/-20 | mV     |
| 3V3 regulator output                                        | V 3 V 3     | T J = 25°C           | 3.1   | 3.3   | 3.5   | V      |
| Deviation of 3V3 regulator output over temperature          | V DEV 3 T   | T J = full range     |       | +/-5  | +/-20 | mV     |
| Deviation of 3V3 regulator output over supply voltage       | V DEV 3 S   | V V S = full range   |       |       | +/-50 | mV     |
| RDSON power switch                                          | R ON 3 V 3  | T J = 25°C           |       | 1.2   | 1.6   | Ohm    |
| Overcurrent protection activation threshold                 | I OVB       | Output current       | 800   | 1200  | 1600  | mA     |
| Oscillator frequency                                        | f BUCK      |                      | 520   | 650   | 820   | kHz    |
| 3V3 regulator duty cycle limit                              | cycle Limit |                      |       | 83    |       | %      |
| Schottky diode forward voltage                              | V SDF       | I = 350 mA           |       | 0.6   | 0.8   | V      |
| Internal Schottky diode maximum current                     | I SDI       |                      |       | 0.1   | 0.12  | A      |
| Start delay of buck converter after ris- ing edge of ENABLE | t START     |                      |       |       | 1     | ms     |

Table 13: Regulator DC and Timing characteristics

<!-- image -->

## 7 Package Mechanical Data

Package: QFN36, 0.5 mm pitch, size 5.0 mm x 6.0 mm. Attention: Drawings not to scale.

<!-- image -->

Figure 13: QFN36 Package Dimensions

<!-- image -->

| Description            | Dimension [mm]   | Min       | Typ       | Max       |
|------------------------|------------------|-----------|-----------|-----------|
| Total Thickness        | A                | 0.80      | 0.85      | 0.90      |
| Stand Off              | A1               | 0.00      | 0.035     | 0.05      |
| Mold Thickness         | A2               | -         | 0.65      | -         |
| L/F Thickness          | A3               | 0.203 REF | 0.203 REF | 0.203 REF |
| Lead Width             | b                | 0.20      | 0.25      | 0.30      |
| Body Width             | D                | 5 BSC     | 5 BSC     | 5 BSC     |
| Body Length            | E                | 6 BSC     | 6 BSC     | 6 BSC     |
| Lead Pitch             | e                | 0.5 BSC   | 0.5 BSC   | 0.5 BSC   |
| EP Size                | J                | 3.5       | 3.6       | 3.7       |
| EP Size                | K                | 4.0       | 4.1       | 4.2       |
| Lead Length            | L                | 0.35      | 0.40      | 0.45      |
| Package Edge Tolerance | aaa              | 0.1       | 0.1       | 0.1       |
| Mold Flatness          | bbb              | 0.1       | 0.1       | 0.1       |
| Coplanarity            | ccc              | 0.08      | 0.08      | 0.08      |
| Lead Offset            | ddd              | 0.1       | 0.1       | 0.1       |
| Exposed Pad Offset     | eee              | 0.1       | 0.1       | 0.1       |

Table 14: QFN36 Package Dimensionsin mm

<!-- image -->

## 8 Figures Index

|    |                                                                               |       | 7     | off condition . . . . . . . . . .                          |       |
|----|-------------------------------------------------------------------------------|-------|-------|------------------------------------------------------------|-------|
| 2  | Optional step-up converter for VCP,                                           |       |       | Safe                                                       | 12    |
|    | * minimal load at VCC_IO is required, ** optional resistor to limit switching |       | 8 9   | Low Power Modes . . . . . . . . . DIAG Output . . .        | 14    |
|    | reg-                                                                          |       |       | . . . . . . . .                                            | 15 16 |
| 3  | ulator load peak current (e.g. 10 Ohm) TMC6140-LA pinning QFN36 . . . . .     | 5 7   | 10 11 | . . SH_SET con/uniFB01guration . . . . . . 3V3 Switching   | 17    |
| 4  | Miller charge schematic . .                                                   |       |       | . . Regulator                                              |       |
|    | . . . . . . Bridge protection                                                 | 10 11 | 12    | . . . . . . Shunt Ampli/uniFB01er setup for phaseW . . . . | 18    |
| 5  | options . . . . . . .                                                         |       | 13    | QFN36 Package Dimensions                                   | 25    |

Ringing DRV\_STRONG=0 . . . . . .

.

.

12

<!-- image -->

1

Standard application

.

.

.

.

.

.

.

.

.

.

4

6

## 9 Tables Index

| 2   | Functional Pin Description . . . . . . .                                                        | 9   |       | nal change to start gate driver output change . . . . . . . . . . . . . . . . . . . . . . .   | 21    |
|-----|-------------------------------------------------------------------------------------------------|-----|-------|-----------------------------------------------------------------------------------------------|-------|
| 3   | Functional Pin Description                                                                      | 10  | 10    |                                                                                               |       |
| 4   | . . . . . . . 3V3 Switching Regulator Components . . . . . .                                    | 17  | 11    | Detection DC characteristics DIAG and Low Power Mode .                                        | 22 22 |
| 5   | Absolute Maximum Ratings . . . . .                                                              | 19  |       | Timing                                                                                        |       |
| 6   | Operational                                                                                     | 20  | 12    | Shunt Resistor Ampli/uniFB01er DC charac- teristics . . . . . . . . . . . . . . . . . .       | 23    |
|     | Range                                                                                           |     |       |                                                                                               | 24    |
| 7   | . . . . . . Power Supply Current DC characteris- tics . . . . . . . . . . . . . . . . . . . . . | 20  | 13 14 | Regulator DCandTiming characteristics QFN36 Package Dimensionsinmm . . . . . . . . . . .      | 26    |
| 8   | Motor Driver Timing and DC charac- teristics . . . . . . . . . . . . . . . . . .                |     | 15    | IC Revision . . . . . . . .                                                                   | 29 29 |
|     |                                                                                                 | 21  | 16    | . . . . . . . Document Revision . . .                                                         |       |

Reaction delay times from input sig-

<!-- image -->

1

Order codes

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

3

9

## 10 Revision History

## 10.1 IC Revision

Version

Date

Author

## 10.2 Document Revision

Version

Date

Author

| V1.0   | 2021-JUN-10   | HS   | Initial version                                                     |
|--------|---------------|------|---------------------------------------------------------------------|
| V1.01  | 2021-JUL-09   | HS   | Added hint to use external diodes for an increased duty cycle limit |
| V1.02  | 2021-SEP-27   | HS   | Corrected errorneous connections of Cx pins in Figure 1             |
| V1.03  | 2021-OCT-15   | HS   | Updated short spec block diagram                                    |

Description

Table 15: IC Revision

| V1.0   | 2021-MAY-17   | HS   | TMC6140-LA release   |
|--------|---------------|------|----------------------|

Description

Table 16: Document Revision

<!-- image -->