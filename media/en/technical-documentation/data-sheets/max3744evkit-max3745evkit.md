<!-- lastmod 2022-08-04 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The  MAX3744/MAX3745  evaluation  kit  (EV  kit)  allows complete evaluation of both versions of 2.7Gbps transimpedance amplifiers.

The EV kit includes a circuit that emulates the high speed, zero-to-peak current input signal that would be produced by a photodiode. The kit also includes a calibration circuit that allows accurate bandwidth measurement.

The MAX3744/MAX3745 EV kit is fully assembled and tested.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ Includes Photodiode Emulation Circuit
- ♦ Calibration Circuit for Accurate Bandwidth Measurement

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC- PACKAGE   |
|--------------|----------------|---------------|
| MAX3744EVKIT | -40°C to +85°C | Die           |
| MAX3745EVKIT | -40°C to +85°C | Die           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Electrical Evaluation Component List

| DESIGNATION          |   QTY | DESCRIPTION                                  |
|----------------------|-------|----------------------------------------------|
| C1                   |     1 | 33 μ F ± 5%, 10V min tantalum capacitor      |
| C2                   |     1 | 10 μ F ± 10%, 10V min ceramic capacitor      |
| C3, C5, C6           |     3 | 0.01 μ F ± 10% ceramic capacitors (0201)     |
| C4, C7, C8, C10, C11 |     5 | 0.1 μ F ± 10% ceramic capacitors (0402)      |
| J3-J7                |     5 | SMA connectors, round Johnson 142-0701-801   |
| JU1                  |     1 | 2-pin header, 0.1in centers                  |
| L1                   |     1 | 56nH inductor Coilcraft 1008CS-560XKBC       |
| R3, R4, R11, R12     |     4 | 499 Ω ± 1% resistor (0402)                   |
| R5, R8               |     2 | 4.99k Ω ± 1% resistor (0402)                 |
| R6, R7               |     2 | 53.6 Ω ± 1% resistor (0402)                  |
| R9, R10              |     2 | 49.9 Ω ± 1% resistor (0402) MAX3744 EV board |
| R9, R10              |     2 | Not installed MAX3745 EV board               |

| DESIGNATION           |   QTY | DESCRIPTION                                  |
|-----------------------|-------|----------------------------------------------|
| R13, R14              |     2 | 24.9 Ω ± 1% resistor (0402) MAX3744 EV board |
| R13, R14              |     2 | 0 Ω shunt resistor (0402) MAX3745 EV board   |
| R15, R16              |     2 | 10k Ω ± 1% resistor (0402)                   |
| TP1-TP4               |     4 | Test Points                                  |
| U1                    |     1 | MAX3744E/D MAX3744 EV board                  |
| U1                    |     1 | MAX3745E/D MAX3745 EV board                  |
| Outside Vendor Supply |     0 | 1mil Au wire (8 bonds)                       |
| Outside Vendor Supply |     0 | Epoxy, Ablefilm 84-1 LMI                     |
| None                  |     1 | Shunt                                        |
| None                  |     1 | MAX3744 EV board                             |
| None                  |     1 | MAX3745 EV board                             |
| None                  |     1 | MAX3744/MAX3745 Data Sheet                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## \_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE           |
|------------|--------------|-------------------|
| AVX        | 803-946-0690 | www.avxcorp.com   |
| Coilcraft  | 800-322-2645 | www.coilcraft.com |
| Murata     | 770-436-1300 | www.murata.com    |

Note: Indicate  that  you  are  using  the  MAX3744/MAX3745 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Connect a signal source to IN at J3. Set the signal amplitude  to  100mVP-P  (this  may  require  some attenuation between the source and the MAX3744/MAX3745  EV  kit).  The  signal  should have a data rate of 2.5Gbps.
- 2) Connect OUT+ and OUT- to the 50 Ω inputs  of  a high-speed oscilloscope at J6 and J7.
- 3) Remove the shunt from jumper JU1.
- 4) Connect a +3.3V supply to the VCC terminal and ground to the GND terminal.
- 5) The  differential  signal  at  the  oscilloscope  should be greater than 280mVP-P (140mVP-P on MAX3744 EV kit).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3744/MAX3745 EV kit allows characterisation without a photodiode. The kit is designed to emulate a DC-coupled photodiode input. Diode currents can have 6 μ AP-P  to  2mAP-P  AC-current  with  a  DC  component from 10 μ A to  1mA. The high-speed current source of the photodiode is emulated on the EV  kit using separate AC and DC paths. The AC signal is supplied from a standard 50 Ω lab source that delivers power to an  on  board  termination  resistor.  A  current  is  then generated from the voltage signal by a resistor with low stray  capacitance.  The  effect  of  the  DC  photodiode current may be emulated by a current source at TP1. An  isolation  resistor  prevents  the  DC  source  from loading the AC path.

The values of the series resistive element, R3 and R4, have been carefully selected so that the bandwidth of the  transimpedance  amplifier  is  not  altered.  Surface- mount  resistors  have  parasitic  capacitance  that  may reduce their impedance at frequencies above 1GHz.

## \_\_\_\_\_\_\_\_\_\_\_\_Photodiode Emulation

The  following  procedure  can  be  used  to  emulate  the high-speed current signal generated by a photodiode:

- 1) Select the desired optical power (PAVE, dBm) and extinction ratio (re).
- 2) Calculate the average current (IAVE, A). Set the DC current at TP1 to IAVE.

<!-- formula-not-decoded -->

( ρ = photodiode responsivity in A/W)

- 3) Calculate  the  AC  signal  current  and  adjust  the signal generator to obtain it.

<!-- formula-not-decoded -->

For example: To emulate a photodiode with an average power of -16dBm and an extinction ratio of 10:

- 1) -16dBm optical power will produce 25 μ A of average input current (assume photodiode responsivity of 1A/W). Set the DC current input to 25 μ A at TP1.
- 2) The  signal  amplitude  is  2  IAVE  (re-1)  /  (re+1)  = 41 μ A. To generate this current through the 1000 Ω input resistors, set the signal source to produce an output level of

<!-- formula-not-decoded -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Noise Measurement

Remove R3 and R4 before attempting noise measurements to minimize input capacitance. With R3 and R4 removed, the total capacitance at the IN pin is approximately 0.85pF.

<!-- formula-not-decoded -->

The Average Power at the MAX3744 input is indicated by  the  common-mode  output  measured  at  TP2  and TP3.  Refer  to  the  MAX3744  data  sheet  for  details.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Adjustments and Control Descriptions

| COMPONENT   | NAME               | FUNCTION                                    |
|-------------|--------------------|---------------------------------------------|
| JU1         | OFFSET CORRECTION  | Instal JU1 to disable offset correction.    |
| TP1         | DC CURRENT INPUT   | Apply DC current for photodiode simulation. |
| TP2, TP3    | OUTPUT COMMON MODE | MAX3744 RSSI signal.                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. MAX3744/MAX3745 EV Kit Schematic

<!-- image -->

Figure 2. MAX3744/MAX3745 EV Kit

<!-- image -->

PC Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX3744/MAX3745 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3744/MAX3745 EV Kit PC Board Layout-Power Plane

Figure 4. MAX3744/MAX3745 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX3744/MAX3745 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3744/MAX3745 Evaluation Kit

Revision History

Rev A; 8/03:

Initial EV kit release.

Rev 1; 8/06:

Corrected Greek symbols (page 2).

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_